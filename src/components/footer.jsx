import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 p-8">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-8">
          {/* Newsletter */}
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-2">Exclusive</h2>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-sm mb-4">Get 10% off your first order</p>
            
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white dark:bg-gray-800"
              />
              <Button variant="default">Subscribe</Button>
            </div>
          </div>

          <Separator className="md:hidden" />

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>Ill Bijoy sorani, Dhaka,</li>
              <li>DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          <Separator className="md:hidden" />

          {/* Account */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">My Account</a></li>
              <li><a href="#" className="hover:underline">Login / Register</a></li>
              <li><a href="#" className="hover:underline">Cart</a></li>
              <li><a href="#" className="hover:underline">Wishlist</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
            </ul>
          </div>

          <Separator className="md:hidden" />

          {/* Quick Link */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Exclusive. All rights reserved.
          </div>

          {/* Download App */}
          <div className="flex flex-col">
            <h4 className="font-semibold mb-2">Download App</h4>
            <p className="text-xs mb-2">Score $3 with App New User Only</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <span>Google Play</span>
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <span>App Store</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}