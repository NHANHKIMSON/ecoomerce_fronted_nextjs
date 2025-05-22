// app/(dashboard)/products/page.jsx

import { getAllProducts, getAllProductCategory } from "@/service/product-service";
import { ProductTable } from "@/components/products-table";
import { DialogCreateProduct } from "./_components/create-dialog";
import { PaginationProduct } from "@/components/pagegination";

export default async function ProductPage({ searchParams }) {
  const params = await searchParams;
  const current_page = params.page;
  const products = await getAllProducts(current_page);
  const categories = await getAllProductCategory();

  return (
    <>
      <div className="py-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">All Products</h2>
        <DialogCreateProduct categories={categories} />
      </div>

      <ProductTable products={products.data} categories={categories} />

      <div className="mt-6">
        <PaginationProduct
          currentPage={products.current_page}
          lastPage={products.last_page}
          basePath="/products"
        />
      </div>
    </>
  );
}