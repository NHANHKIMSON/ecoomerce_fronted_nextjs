// /api/create-dashboard-link/route.js (or similar)
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { accountId } = await request.json();

    if (!accountId) {
      return NextResponse.json({ error: "Missing Stripe account ID" }, { status: 400 });
    }

    const link = await stripe.accounts.createLoginLink(accountId);
    return NextResponse.json({ url: link.url });
  } catch (error) {
    console.error("Dashboard Link Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}