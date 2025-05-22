import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function ContactContent() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        <span className="hover:text-primary cursor-pointer">Home</span> / <span>Contact</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information Cards */}
        <div className="space-y-8">
          <Card>
            <CardHeader className="text-xl font-semibold pb-2">Call To Us</CardHeader>
            <CardContent>
              <p className="mb-4">We are available 24/7, 7 days a week.</p>
              <p className="font-medium">Phone: +880181112222</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-xl font-semibold pb-2">Write To US</CardHeader>
            <CardContent>
              <p className="mb-4">Fill out our form and we will contact you within 24 hours.</p>
              <div className="space-y-2">
                <p className="font-medium">Emails: customer@exclusive.com</p>
                <p className="font-medium">Emails: support@exclusive.com</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name *
                </label>
                <Input id="name" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Your Email *
                </label>
                <Input id="email" type="email" placeholder="Your Email" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Your Phone *
                </label>
                <Input id="phone" type="tel" placeholder="Your Phone" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Your Message
              </label>
              <Textarea id="message" placeholder="Your Message" rows={5} />
            </div>

            <Button type="submit" className="w-full md:w-auto px-8">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}