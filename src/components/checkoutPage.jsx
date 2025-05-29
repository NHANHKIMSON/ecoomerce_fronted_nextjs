// components/checkout-page.jsx

"use client";
import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

export const CheckoutPageComponent = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const organizerStripeAccountId = "acct_1RQkIt2Lhx44qu11";
  const [intentId, setIntentId] = useState();
  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: convertToSubcurrency(amount),
        organizerStripeAccountId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {setClientSecret(data.clientSecret), setIntentId(data.paymentIntentId)})
      .catch((err) => {
        console.error("Payment intent creation failed", err);
        setErrorMessage("Failed to initialize payment.");
      });
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setErrorMessage("Stripe has not loaded.");
      setLoading(false);
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="py-6">
        <h2>Your are Cheking to: </h2>
      </div>
      <form onSubmit={handleSubmit}>
        {clientSecret && <PaymentElement />}
        {errorMessage && (
          <div className="text-red-500 mt-2 text-sm">{errorMessage}</div>
        )}
        <Button disabled={loading || !stripe} className="mt-4 w-full">
          {loading ? "Processing..." : `Pay amount: ${amount}`}
        </Button>
      </form>
    </>
  );
};

