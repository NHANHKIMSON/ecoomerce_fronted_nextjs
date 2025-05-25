"use server";

import { signIn, signOut } from "@/auth";
import { registerService } from "@/service/auth-service";
import { redirect } from "next/navigation";
export async function loginAction(values) {
  const email = values.email;
  const password = values.password;
   await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  redirect('/home');
}

export async function registerAction(values) {
  const email = values.email;
  const password = values.password;
  await registerService({email, password})
  redirect('/login');
}

// export async function registerAction(values) {
//   try {
//     await registerService(values);
//     return { success: true };
//   } catch (error) {
//     return { error: error.message };
//   }
// }

export async function logout() {
  const result = await signOut();
  return result;
}