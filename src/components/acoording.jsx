import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export function AccordionHomePage() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Why shop with Acorning?</AccordionTrigger>
          <AccordionContent>
            Acorning offers a curated selection of high-quality products, fast shipping, and seamless checkout. We focus on customer satisfaction and provide dedicated support for every order.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do you offer free shipping?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer free shipping on all orders over $50. We also provide express delivery options for urgent needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I return my order?</AccordionTrigger>
          <AccordionContent>
            Absolutely. We have a 30-day hassle-free return policy. If you're not satisfied, you can return or exchange your product easily.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How secure is my payment?</AccordionTrigger>
          <AccordionContent>
            All transactions on Acorning are encrypted and PCI-DSS compliant. We support secure payments via credit card, PayPal, and other trusted gateways.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Where do you ship to?</AccordionTrigger>
          <AccordionContent>
            We ship internationally to most countries. Shipping times and costs may vary depending on your location.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }