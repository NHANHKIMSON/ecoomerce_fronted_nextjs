"use server";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { getProductById } from "@/service/product-service";

export default async function ProductContent({ params }) {
  const { id } = params;
  const productById = await getProductById(id);
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground mb-6">
        <span>Account</span> / <span>Gaming</span> /{" "}
        <span className="font-semibold">Havic HV G-92 Gamepad</span>
      </div>
      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Product Image */}
        <div
          className="bg-gray-100 dark:bg-gray-800 rounded-lg h-96"
          style={{ backgroundImage: `url(${productById.photo_url})` }}
        >
          {/* Product image placeholder */}
        </div>

        {/* Right Column - Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{productById.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(150 Reviews)</span>
            <Badge variant="outline" className="ml-4">
              In Stock ({productById.instock})
            </Badge>
          </div>

          <p className="text-2xl font-bold mb-6">${productById.price}</p>

          <p className="mb-8">
            {/* PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive. */}
            {productById.description}
          </p>

          {/* Color Selection */}
          <div className="mb-8">
            <h3 className="font-medium mb-2">Colours:</h3>
            <div className="flex gap-2">
              {["Black", "White", "Red"].map((color) => (
                <Button key={color} variant="outline" className="rounded-full">
                  {color}
                </Button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <h3 className="font-medium mb-2">Size:</h3>
            <div className="flex gap-2">
              {["XS", "S", "M", "L"].map((size) => (
                <Button key={size} variant="outline" className="w-12 h-12">
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Quantity and Buy Button */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" className="text-xl">
                -
              </Button>
              <span className="px-4">2</span>
              <Button variant="ghost" className="text-xl">
                +
              </Button>
            </div>
            <Button className="px-8 py-6">Buy Now</Button>
          </div>

          {/* Delivery Info */}
          <div className="space-y-4">
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

      <Separator className="my-12" />

      {/* Related Items */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Related Item</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "HAVIT HV-G92 Gamepad",
              price: 120,
              originalPrice: 160,
              discount: 40,
              reviews: 88,
            },
            {
              name: "AK-900 Wired Keyboard",
              price: 96,
              originalPrice: 160,
              discount: 30,
              reviews: 75,
            },
            {
              name: "IPS LCD Gaming Monitor",
              price: 370,
              originalPrice: 400,
              discount: 40,
              reviews: 98,
            },
            {
              name: "RGB liquid CPU Cooler",
              price: 160,
              originalPrice: 170,
              discount: 10,
              reviews: 85,
            },
          ].map((product) => (
            <div key={product.name} className="border rounded-lg p-4">
              <div className="bg-gray-100 dark:bg-gray-800 h-48 mb-4 rounded-lg"></div>
              <Badge variant="destructive" className="mb-2">
                -{product.discount}%
              </Badge>
              <h3 className="font-medium mb-1">{product.name}</h3>
              <div className="flex gap-2 mb-1">
                <span className="font-bold">${product.price}</span>
                <span className="text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              </div>
              <div className="flex text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                <span className="text-muted-foreground ml-1">
                  ({product.reviews})
                </span>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Add To Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
