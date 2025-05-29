// app/api/create-connected-account/route.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body?.email || !body?.accountType) {
      return Response.json({ error: "Missing email or account type" }, { status: 400 });
    }

    const account = await stripe.accounts.create({
      type: body.accountType,
      email: body.email,
    });

    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: "http://localhost:3000/dashboard",
      return_url: "http://localhost:3000/dashboard",
      type: "account_onboarding",
    });

    return Response.json({
      accountId: account.id,
      url: accountLink.url,
    });
  } catch (error) {
    console.error("Stripe API error:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}