"use server";

import toast from "react-hot-toast";

export async function loginService({email, password}) {
  const res = await fetch(`http://127.0.0.1:8000/api/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const user = await res.json();
  return user;
}

export async function registerService({email, password}) {
  const res = await fetch(`http://127.0.0.1:8000/api/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      password_confirmation: password
    }),
  });
  const user = await res.json();
  return user;
}

export async function logoutService(){
  const res = await fetch(`http://127.0.0.1:8000/api/login`)
}