"use server";

import { auth } from "@/auth";

export async function getAllCategories() {
  const res = await fetch(`http://127.0.0.1:8000/api/categories`);
  const categories = await res.json();
  return categories;
}

export async function CreateNewProductCategories(formData) {
  const session = await auth();
  const token = session?.access_token;
  const res = await fetch(`http://127.0.0.1:8000/api/categories`,{
    method: "POST",
    headers: {
      "Accept": "application/json",
      // Authorization: `Bearer ${token}`,
    },
    body: formData
  });
  const categories = await res.json();
  return categories;
}

export async function DeleteProductCategoryById(id) {
  const session = await auth();
  const token = session?.access_token;
  const res = await fetch(`http://127.0.0.1:8000/api/categories/${id}`,{
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      // Authorization: `Bearer ${token}`,
    },
  });
}