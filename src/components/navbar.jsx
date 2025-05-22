"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Apple } from "iconsax-reactjs";
import { AddToCard } from "@/app/(ecommerce)/_components/add-to-card";

export default function Navbar({ pathName }) {
  const isActive = (href) => pathName === href;

  const linkClass = (href) =>
    `group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium
     ${
       isActive(href)
         ? "underline underline-offset-4 decoration-2"
         : "bg-white dark:bg-gray-950"
     }
     hover:underline hover:underline-offset-4 hover:decoration-2 focus:outline-none
     disabled:pointer-events-none disabled:opacity-50
    dark:focus:text-gray-50`;

  return (
    <>
    <div className="flex justify-center items-center py-4 shadow-2xs border-b-2">
      <div className="flex items-center justify-center gap-4">
        <p className="text-sm lg:text-xl underline underline-offset-4">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <Button size={"sm"}>ShopNow</Button>
      </div>
    </div>
      <div className="flex justify-between items-center w-full px-4 md:px-6">
        <header className="flex h-20 shrink-0 items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
                <MountainIcon className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <div className="grid gap-2 py-6">
                <Link
                  href="/home"
                  className={`flex w-full items-center py-2 text-lg font-semibold ${
                    isActive("/home") ? "text-primary" : ""
                  }`}
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`flex w-full items-center py-2 text-lg font-semibold ${
                    isActive("/about") ? "text-primary" : ""
                  }`}
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={`flex w-full items-center py-2 text-lg font-semibold ${
                    isActive("/contact") ? "text-primary" : ""
                  }`}
                  prefetch={false}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          <Link
            href="/home"
            className="mr-6 hidden lg:flex items-center"
            prefetch={false}
          >
            <Apple />
            <span className="sr-only">Acme Inc</span>
          </Link>

          <nav className="hidden lg:flex gap-6">
            <Link href="/home" className={linkClass("/home")} prefetch={false}>
              Home
            </Link>
            <Link
              href="/about"
              className={linkClass("/about")}
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={linkClass("/contact")}
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </header>
        <div>
          <AddToCard />
        </div>
      </div>
    </>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
