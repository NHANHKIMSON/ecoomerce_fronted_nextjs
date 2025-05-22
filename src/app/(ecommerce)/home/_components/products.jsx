import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProductCard({ product }) {
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