// File: app/api/create-checkout-session/route.js
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { eventId, organizerAccountId } = await req.json();

    // Dummy event data
    const event = { name: "Live Music Show", price: 2500 };

    const session = await stripe.checkout.sessions.create(
      {
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: event.price,
              product_data: {
                name: event.name,
              },
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
        payment_intent_data: {
          application_fee_amount: 250,
          transfer_data: {
            destination: organizerAccountId,
          },
        },
      },
      {
        stripeAccount: organizerAccountId,
      }
    );

    return Response.json({ checkoutUrl: session.url });
  } catch (error) {
    console.error("Stripe Error:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}