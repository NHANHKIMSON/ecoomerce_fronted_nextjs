"use client";

import { CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  const intentId = searchParams.get("payment_intent");

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-lg rounded-2xl p-6">
        <div className="flex flex-col items-center space-y-4">
          <CheckCircle className="text-green-500 w-16 h-16" />
          <h1 className="text-2xl font-bold text-green-700">Payment Successful!</h1>
          <p className="text-muted-foreground">
            Thank you for your purchase.
          </p>
          <Separator />
          <p className="text-sm">
            Amount paid:{" "}
            <span className="font-semibold text-black">${amount}</span>
          </p>
          <p className="text-sm">
            Payment Intent ID:{" "}
            <span className="text-muted-foreground">{intentId}</span>
          </p>
          <Link href="/">
            <Button variant="default" className="mt-4 w-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}