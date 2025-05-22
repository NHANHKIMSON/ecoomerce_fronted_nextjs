"use server";
import { getAllProductCategory } from "@/service/product-service";
import { ProductCategoryTable } from "./_components/products-table";
import { DialogCreateProductCategory } from "./_components/create-dialog";
export default async function CategoriesPage() {
    const categories = await getAllProductCategory();
  return (
    <>
      <div className="py-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">All Product Categories</h2>
        <DialogCreateProductCategory />
      </div>

      <ProductCategoryTable categories={categories} />

      <div className="mt-6">
        {/* <PaginationProduct
          currentPage={products.current_page}
          lastPage={products.last_page}
          basePath="/products"
        /> */}
      </div>
    </>
  );
}
