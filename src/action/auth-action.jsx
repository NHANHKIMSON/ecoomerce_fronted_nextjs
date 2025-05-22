"use server";

import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
export async function loginAction(values) {
  const email = values.email;
  const password = values.password;
   await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  redirect('/');
}

export async function logout() {
  await signOut();
}