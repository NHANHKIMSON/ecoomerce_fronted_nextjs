"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Darkmode } from "./darkmode";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import toast from "react-hot-toast";
import { signOut } from "@/auth";
import { LogoutButton } from "./logout";

export function Navigation({ session }) {
  // Fixed typo from 'sesstion' to 'session'
  const user = session?.user;
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define your navigation links
  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    !user && { href: "/login", label: "Sign Up" }, // Fixed logical operator
  ].filter(Boolean);

  // Get user initials for avatar fallback
  const getInitials = (name) => {
    return (
      name
        ?.split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase() || ""
    );
  };
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Exclusive
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "hover:text-primary transition-colors",
                  pathname === link.href
                    ? "text-primary font-medium"
                    : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Search, Cart, and User Profile */}
          <div className="flex items-center space-x-4">
            <Darkmode />
            <div className="relative hidden md:block">
              <Input
                placeholder="What are you looking for?"
                className="pl-10 pr-4 w-64"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="p-2 relative" aria-label="Shopping cart">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>

            {/* User Profile Dropdown */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.image} alt={user.name} />
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="p-2">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    {user?.role === "admin" ? (
                      <Link href="/" className="w-full">
                        Dashboard
                      </Link>
                    ) : (
                      <Link href="/orders" className="w-full">
                        My Orders
                      </Link>
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <div className="w-full text-destructive">
                      <LogoutButton/>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              // <LogoutButton/>
              ''
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2 mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "py-2 px-4 hover:bg-gray-100 rounded",
                    pathname === link.href
                      ? "bg-gray-100 text-primary font-medium"
                      : ""
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {user && (
                <>
                  <Link
                    href="/profile"
                    className="py-2 px-4 hover:bg-gray-100 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <div
                    className="py-2 px-4 hover:bg-gray-100 rounded text-destructive"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LogoutButton/>
                  </div>
                </>
              )}
            </div>
            <div className="mt-4 relative">
              <Input
                placeholder="Search products..."
                className="pl-10 pr-4 w-full"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
