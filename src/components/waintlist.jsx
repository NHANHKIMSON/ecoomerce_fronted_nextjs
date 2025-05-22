import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function WishlistContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground mb-6">
        <span>Account</span> / <span className="font-semibold">Wishlist</span>
      </div>

      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-8">Wishlist (4)</h1>

      {/* Wishlist Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Gucci duffle bag */}
        <div className="border rounded-lg p-4">
          <div className="bg-gray-100 dark:bg-gray-800 h-48 mb-4 rounded-lg"></div>
          <h3 className="font-medium mb-2">Gucci duffle bag</h3>
          <div className="flex gap-2 mb-4">
            <span className="font-bold">$960</span>
            <span className="text-muted-foreground line-through">$1160</span>
          </div>
          <Button className="w-full">Add To Cart</Button>
        </div>

        {/* RGB liquid CPU Cooler */}
        <div className="border rounded-lg p-4">
          <div className="bg-gray-100 dark:bg-gray-800 h-48 mb-4 rounded-lg"></div>
          <h3 className="font-medium mb-2">RGB liquid CPU Cooler</h3>
          <div className="font-bold mb-4">$1960</div>
          <Button className="w-full">Add To Cart</Button>
        </div>

        {/* GPII Shooter USB Gamepad */}
        <div className="border rounded-lg p-4">
          <div className="bg-gray-100 dark:bg-gray-800 h-48 mb-4 rounded-lg"></div>
          <h3 className="font-medium mb-2">GPII Shooter USB Gamepad</h3>
          <div className="font-bold mb-4">$550</div>
          <Button className="w-full">Add To Cart</Button>
        </div>

        {/* Quilted Satin Jacket */}
        <div className="border rounded-lg p-4">
          <div className="bg-gray-100 dark:bg-gray-800 h-48 mb-4 rounded-lg"></div>
          <h3 className="font-medium mb-2">Quilted Satin Jacket</h3>
          <div className="font-bold mb-4">$750</div>
          <Button className="w-full">Add To Cart</Button>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Just For You Section */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Just For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* ASUS FHD Gaming Laptop */}
          <div className="border rounded-lg p-4">
            <div className="bg-gray-100 dark:bg-gray-800 h-48 mb-4 rounded-lg"></div>
            <h3 className="font-medium mb-2">ASUS FHD Gaming Laptop</h3>
            <div className="flex gap-2 mb-1">
              <span className="font-bold">$960</span>
              <span className="text-muted-foreground line-through">$1160</span>
            </div>
            <div className="flex text-yellow-400 text-sm mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="text-muted-foreground ml-1">(65)</span>
            </div>
            <Button variant="outline" className="w-full">Add To Cart</Button>
          </div>

          {/* IPS LCD Gaming Monitor */}
          <div className="border rounded-lg p-4">
            <div className="bg-gray-100 dark:bg-gray-800 h-48 mb-4 rounded-lg"></div>
            <h3 className="font-medium mb-2">IPS LCD Gaming Monitor</h3>
            <div className="font-bold mb-1">$1160</div>
            <div className="flex text-yellow-400 text-sm mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="text-muted-foreground ml-1">(65)</span>
            </div>
            <Button variant="outline" className="w-full">Add To Cart</Button>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      {/* New Items Section */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6">NEW</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* HAVIT HV-G92 Gamepad */}
          <div className="border rounded-lg p-4">
            <div className="bg-gray-100 dark:bg-gray-800 h-48 mb-4 rounded-lg"></div>
            <h3 className="font-medium mb-2">HAVIT HV-G92 Gamepad</h3>
            <div className="font-bold mb-1">$560</div>
            <div className="flex text-yellow-400 text-sm mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="text-muted-foreground ml-1">(65)</span>
            </div>
            <Button variant="outline" className="w-full">Add To Cart</Button>
          </div>

          {/* AK-900 Wired Keyboard */}
          <div className="border rounded-lg p-4">
            <div className="bg-gray-100 dark:bg-gray-800 h-48 mb-4 rounded-lg"></div>
            <h3 className="font-medium mb-2">AK-900 Wired Keyboard</h3>
            <div className="font-bold mb-1">$200</div>
            <div className="flex text-yellow-400 text-sm mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="text-muted-foreground ml-1">(65)</span>
            </div>
            <Button variant="outline" className="w-full">Add To Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}