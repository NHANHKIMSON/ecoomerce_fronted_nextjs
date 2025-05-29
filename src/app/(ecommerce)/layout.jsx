"use server";
import { auth } from "@/auth";
import { Navigation } from "@/components/ecmm-nav";
import { Footer } from "@/components/footer";

export default async function EcommerceLayout({children}){
    const session = await auth();
    return (
        <>
        <Navigation session={session}/>
        {children}
        <Footer/>
        </>
    )
}