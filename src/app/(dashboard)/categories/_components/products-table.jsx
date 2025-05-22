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
import { DropdownMenuAction } from "./dropdown";
import { DialogDeleteProductCategory } from "./delete-dialog";

export function ProductCategoryTable({ categories = [] }) {
  return (
    <Table>
      <TableCaption>A list of your recent products</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Product Categories</TableHead>
          <TableHead className="text-right">Image</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((cat) => (
          <TableRow key={cat.id}>
            <TableCell className="font-medium">{cat.name}</TableCell>
            <TableCell className="text-right">
              <div className="h-5 w-5">
                <div
                  className="h-full w-full rounded-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${cat.photo_url})` }}
                />{" "}
              </div>
            </TableCell>
            <TableCell className={"flex gap-2"}>
              {/* <DropdownMenuAction/> */}
              {/* <DialogUpdateProduct categories={categories}/> */}
              <DialogDeleteProductCategory productId={cat.id}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="text-right">
            {/* ${products.reduce((sum, p) => sum + parseFloat(p.price * p.instock || 0), 0).toFixed(2)} */}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
