// /api/request-refund.ts
import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { paymentIntentId } = await req.json();

    const refund = await stripe.refunds.create({
      payment_intent: paymentIntentId,
    });

    return NextResponse.json({ message: "Refund successful", refund });
  } catch (error) {
    console.error("Refund error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}