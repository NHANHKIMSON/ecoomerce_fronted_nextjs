"use client";

import convertToSubCurrentcy from "@/lib/convertToSubCurrentcy";
import { useElements } from "@stripe/react-stripe-js";
import { useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";


export const CheckoutPage = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState();
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch(`/api/create-payment-intent`, {
            method: "POST",
            headers: {
                "ContentType": "application/json",
            },
            body: JSON.stringify({
                amount: convertToSubCurrentcy(amount),
            })
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [amount])

    return (
        <>
        <form action="">
            <Button>Pay</Button>
        </form>
        </>
    )
}