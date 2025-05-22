import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware(req) {
  const session = await auth();
  console.log("Access Token:", session?.user?.role);
  if (!session?.access_token || session?.user?.role !='admin') {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/", "/products"],
};