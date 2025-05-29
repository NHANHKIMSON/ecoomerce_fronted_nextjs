"use server";

import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { amount, organizerStripeAccountId } = await request.json();
    // const organizerStripeAccountId = "acct_1RQkIt2Lhx44qu11";
    console.log("Id from Ceckout Page", organizerStripeAccountId);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      transfer_data: {
        destination: organizerStripeAccountId, // send funds to connected account
      },
    });
    console.log("ID : ", paymentIntent.id);
    return NextResponse.json({ clientSecret: paymentIntent.client_secret, paymentIntentId: paymentIntent.id });
    // return res.json({ clientSecret: paymentIntent.client_secret, paymentIntentId: paymentIntent.id });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error.message}` },
      { status: 500 }
    );
  }
}