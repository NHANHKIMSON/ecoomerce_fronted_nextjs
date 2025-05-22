"use server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { getAllCategories } from "@/service/product-categories";
import {
  getAllProductCategory,
  getAllProducts,
} from "@/service/product-service";
import Link from "next/link";

export async function HomeContent() {
  const categoris = await getAllCategories();
  const products = await getAllProducts();
  return (
    <div className="py-12">
      {/* Categories Section */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Browse By Category</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {categoris.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              className="h-32 flex flex-col items-center justify-center gap-3 p-4 hover:bg-gray-50 transition-colors"
            >
              {/* Category Image with Skeleton */}
              <div className="relative h-12 w-12">
                {category.photo ? (
                  <div
                    className="h-full w-full rounded-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${category.photo_url})` }}
                  />
                ) : (
                  <div className="h-full w-full rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-xs text-gray-500">No Image</span>
                  </div>
                )}
              </div>

              {/* Category Name with Skeleton */}
              {category.name ? (
                <span className="text-sm font-medium text-center line-clamp-2">
                  {category.name}
                </span>
              ) : (
                <Skeleton className="h-4 w-3/4" />
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Best Selling Products */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Best Selling Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.data.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

      {/* More sections would go here... */}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4">
      <Link href={`product-list/${product.id}`}>
        {product.photo ? (
          <img
            src={`http://localhost:9000/images/${product.photo}`}
            alt={product.name}
            width={600}
            height={400}
            className="h-48 mb-4 rounded-lg w-full object-cover"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        ) : (
          <div className="bg-gray-200 h-48 mb-4 rounded-lg"></div>
        )}

        <h3 className="font-medium mb-2">{product.name}</h3>
        <div className="flex gap-2 mb-1">
          <span className="font-bold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through">
              {product.originalPrice}
            </span>
          )}
        </div>
        <div className="flex text-yellow-400 text-sm">
          {[...Array(5)].map((_, i) => (
            <span key={i}>★</span>
          ))}
          <span className="text-gray-500 ml-1">({product.reviews})</span>
        </div>
        <Button variant="outline" className="w-full mt-4">
          Add To Cart
        </Button>
      </Link>
    </div>
  );
}

// Placeholder icon components
function ChevronLeftIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
}

function ChevronRightIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}
