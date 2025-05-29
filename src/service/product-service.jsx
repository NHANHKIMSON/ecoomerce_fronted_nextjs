"use server";

import { auth } from "@/auth";

export async function getAllProductCategory() {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/categories`);
    const categories = await res.json();
    return categories;
  } catch (error) {
    console.log("All Product Categories Error: " + error);
  }
}

export async function UpdateProduct(formData, id) {
  const session = await auth(); // You must define this to get the token
  const token = session?.access_token;

  if (!token) {
    throw new Error("Access token is missing");
  }

  try {
    const res = await fetch(`http://127.0.0.1:8000/api/products/${id}`, {
      method: "POST", // or PUT if you're updating
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData, // Don't set Content-Type manually when using FormData
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || "Failed to update product");
    }

    return data;

  } catch (error) {
    console.error("Upload Product Error:", error);
    throw error;
  }
}


export async function CreateNewProduct(formData) {
  const session = await auth(); 
  const token = session?.access_token;
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/products`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Upload Product Error:", error);
  }
}

export async function getAllProducts(currentPage) {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/products?page=${currentPage}`, {
      cache: 'no-store'
    });
    const products = await res.json();
    return products;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(id) {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/products/${id}`, {
      cache: 'no-store'
    });
    const product = await res.json();
    return product;
  } catch (error) {
    console.log(error);
  }
}

export async function DeleteProductById(id) {
  // console.log("Id on Services: ", id);
  const session = await auth(); 
  const token = session?.access_token;
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/products/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "Application/json"
      },
    });
    const product = await res.json();
    return product;
  } catch (error) {
    console.log("Delete Product Error Service: " + error);
  }
}
