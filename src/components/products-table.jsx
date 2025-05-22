"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DialogDelete } from "@/app/(dashboard)/products/_components/delete-dialog";
import { DialogUpdateProduct } from "@/app/(dashboard)/products/_components/update-dialog";

export function ProductTable({ products = [], categories = [] }) {
  return (
    <Table>
      <TableCaption>A list of your recent products</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Product</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Instock</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>
              {product.description.split(" ").slice(0, 10).join(" ")}
              {product.description.split(" ").length > 10 && "..."}
            </TableCell>
            <TableCell>{product.instock}</TableCell>
            <TableCell>{product.category_name}</TableCell>
            <TableCell className="text-right">
              ${product.price * product.instock}
            </TableCell>
            <TableCell className={"flex gap-2"}>
              <DialogUpdateProduct product={product} categories={categories} />
              <DialogDelete productId={product.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="text-right">
            $
            {products
              .reduce((sum, p) => sum + parseFloat(p.price * p.instock || 0), 0)
              .toFixed(2)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
