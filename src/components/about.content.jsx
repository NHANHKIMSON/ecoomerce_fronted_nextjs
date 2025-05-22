import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AboutContent() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        <span className="hover:text-primary cursor-pointer">Home</span> / <span>About</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl font-bold mb-8">Our Story</h1>

      {/* Company Description */}
      <div className="max-w-3xl mb-12">
        <p className="mb-4">
          Launched in 2018, Exclusive is South Asia's premier online shopping masterpiece with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
        </p>
        <p>
          Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <Card>
          <CardContent className="text-center py-6">
            <h3 className="text-2xl font-bold mb-2">10.5k</h3>
            <p className="text-sm">Sellers on our site</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center py-6">
            <h3 className="text-2xl font-bold mb-2">33k</h3>
            <p className="text-sm">Monthly Product Sales</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center py-6">
            <h3 className="text-2xl font-bold mb-2">45.5k</h3>
            <p className="text-sm">Customer active in our site</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center py-6">
            <h3 className="text-2xl font-bold mb-2">25k</h3>
            <p className="text-sm">Annual gross sale in our site</p>
          </CardContent>
        </Card>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="flex flex-col items-center py-8">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="/images/tom-cruise.jpg" />
                <AvatarFallback>TC</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold">Tom Cruise</h3>
              <p className="text-sm text-gray-500">Founder & Chairman</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center py-8">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="/images/emma-watson.jpg" />
                <AvatarFallback>EW</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold">Emma Watson</h3>
              <p className="text-sm text-gray-500">Managing Director</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center py-8">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src="/images/will-smith.jpg" />
                <AvatarFallback>WS</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold">Will Smith</h3>
              <p className="text-sm text-gray-500">Product Designer</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">FREE AND FAST DELIVERY</h3>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">24/7 CUSTOMER SERVICE</h3>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">MONEY BACK GUARANTEE</h3>
          <p className="text-sm">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
}