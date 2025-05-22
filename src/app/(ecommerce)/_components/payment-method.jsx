"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutPage } from "./checkoutPage";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY isn't defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function PaymentMethod(){
    const amount = 499.00;
    return (
        <>
        <div>
            <h2>Nhanh Kison Has Request</h2>
            <span>{amount}</span>
        </div>
        <Elements 
        stripe={stripePromise}
        options={{
            mode: "payment",
            amount: convertToSubCurrentcy(amount),
            currency: "usd",
        }}
        >
            <CheckoutPage/>
        </Elements>
        </>
    )
}