"use server";

import { CreateNewProductCategories, DeleteProductCategoryById } from "@/service/product-categories";
import { CreateNewProduct, DeleteProductById, UpdateProduct} from "@/service/product-service";

export async function FormDeleteProductAction(formData) {
  // console.log("Id On Form Delete: ", formData.get("id"))
  const id = formData.get("id");
  if (!id) return;
  await DeleteProductById(id);
}

export async function FormCreateNewProduct(data) {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("photo", data.image);
  formData.append("price", data.price);
  formData.append("instock", data.instock);
  formData.append("description", data.description);
  formData.append("category_id", data.categoryId);
  await CreateNewProduct(formData); 
}
export async function FormUpdateProduct(data, id) {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("photo", data.image);
  formData.append("price", data.price);
  formData.append("instock", data.instock);
  formData.append("description", data.description);
  formData.append("category_id", data.categoryId);
  await UpdateProduct(formData, id);
}



export async function FormCreateNewProductCategories(formData) {
  console.log("Data:", formData);
  await CreateNewProductCategories(formData);
}
export async function FormDeleteProductCategoryAction(formData) {
  const id = formData.get("id");
  if (!id) return;
  await DeleteProductCategoryById(id);
}