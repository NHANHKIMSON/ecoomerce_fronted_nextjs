import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

export function CheckoutContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground mb-6">
        <span>Account</span> / <span>Cart</span> / <span className="font-semibold">Checkout</span>
      </div>

      <h1 className="text-2xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Shipping and Payment */}
        <div>
          {/* Shipping Address */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" />
              </div>
            </div>
            <div className="mb-4">
              <Label htmlFor="address">Address</Label>
              <Input id="address" />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" />
              </div>
              <div>
                <Label htmlFor="state">State/Province</Label>
                <Input id="state" />
              </div>
              <div>
                <Label htmlFor="zip">ZIP/Postal Code</Label>
                <Input id="zip" />
              </div>
            </div>
            <div className="mb-4">
              <Label htmlFor="country">Country</Label>
              <Input id="country" />
            </div>
            <div className="mb-4">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="saveAddress" />
              <Label htmlFor="saveAddress">Save this information for next time</Label>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <RadioGroup defaultValue="card" className="space-y-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">Credit/Debit Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal">PayPal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bank" id="bank" />
                <Label htmlFor="bank">Bank Transfer</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Order Notes */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Notes</h2>
            <Input placeholder="Notes about your order..." />
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div>
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Your Order</h2>
            
            {/* Order Items */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Havic HV G-92 Gamepad × 1</span>
                <span>$192.00</span>
              </div>
              <div className="flex justify-between">
                <span>HAVIT HV-G92 Gamepad × 1</span>
                <span>$120.00</span>
              </div>
              <div className="flex justify-between">
                <span>AK-900 Wired Keyboard × 1</span>
                <span>$96.00</span>
              </div>
            </div>

            <Separator className="my-4" />

            {/* Order Totals */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$408.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$24.48</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$432.48</span>
              </div>
            </div>

            <Separator className="my-4" />

            {/* Coupon Code */}
            <div className="mb-6">
              <Label htmlFor="coupon" className="block mb-2">Coupon Code</Label>
              <div className="flex gap-2">
                <Input id="coupon" placeholder="Enter coupon code" />
                <Button variant="outline">Apply</Button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-2 mb-6">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="font-normal">
                I agree to the <a href="#" className="underline">terms and conditions</a>
              </Label>
            </div>

            {/* Place Order Button */}
            <Button className="w-full py-6 text-lg">Place Order</Button>
          </div>

          {/* Delivery Info */}
          <div className="mt-6 space-y-4">
            <div>
              <h4 className="font-medium">Free Delivery</h4>
              <p className="text-sm text-muted-foreground">
                Enter your postal code for Delivery Availability
              </p>
            </div>
            <div>
              <h4 className="font-medium">Return Delivery</h4>
              <p className="text-sm text-muted-foreground">
                Free 30 Days Delivery Returns, Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}