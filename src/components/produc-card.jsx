"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PaginationProduct } from "./pagegination";

export default  function ProductCard({ products }) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-12 py-8">
      <h4>All Products</h4>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 px-4 py-8">
          {products.data.map((product) => (
            // <Card
            //   key={product.id}
            //   className="w-full max-w-sm overflow-hidden rounded-lg border shadow-sm"
            // >
            //   <img
            //     src={`http://localhost:9000/images/${product.photo}`}
            //     alt={product.name}
            //     width={600}
            //     height={400}
            //     className="h-48 w-full object-cover"
            //     style={{ aspectRatio: "600/400", objectFit: "cover" }}
            //   />
            //   <CardContent className="p-4">
            //     <div className="flex items-start justify-between">
            //       <div className="space-y-2">
            //         <Link href="#">
            //           <h3 className="text-lg font-semibold hover:underline">
            //             {product.name}
            //           </h3>
            //         </Link>
            //         <p className="text-sm text-muted-foreground">
            //           {product.description}
            //         </p>
            //       </div>
            //       <span className="text-2xl font-bold">${product.price}</span>
            //     </div>
            //   </CardContent>
            //   <CardFooter className="border-t p-4">
            //     <Button className="w-full">Add to Cart</Button>
            //   </CardFooter>
            // </Card>
            <ProductCardContent product={product}/>
          ))}
        </div>
        <PaginationProduct
          currentPage={products.current_page}
          lastPage={products.last_page}
          basePath="/products"
        />
      </div>
    </>
  );
}


function ProductCardContent({ product }) {
  return (
    <div className="border rounded-lg p-4">
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
        )
    }
      
      <h3 className="font-medium mb-2">{product.name}</h3>
      <div className="flex gap-2 mb-1">
        <span className="font-bold">{product.price}</span>
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
    </div>
  );
}