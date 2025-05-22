"use server";
import { AccordionHomePage } from "@/components/acoording";
import CarsouselProduct from "@/components/hero-swipper";
import { HomeContent } from "@/components/home-content";

import { getAllProducts } from "@/service/product-service";
import { ProductCard } from "./_components/products";
import { PaginationProduct } from "@/components/pagegination";

export default async function HomePage({ searchParams }) {
  const params = await searchParams;
  const current_page = params.page;
  const products = await getAllProducts(current_page);
  return (
    <>
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <CarsouselProduct products={products.data} />
        <AccordionHomePage />
        <HomeContent />
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products?.data?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <div className="mt-6">
            <PaginationProduct
              currentPage={products.current_page}
              lastPage={products.last_page}
              basePath="/products"
            />
          </div>
        </div>
      </div>
      {/* <ProductCard products={products}/> */}
    </>
  );
}
