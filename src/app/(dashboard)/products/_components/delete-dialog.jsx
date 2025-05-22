"use client";
import { FormDeleteProductAction } from "@/action/product-action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BoxRemove } from "iconsax-reactjs";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
export function DialogDelete({ productId }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  async function handleDelete(formData) {
    await FormDeleteProductAction(formData);
    startTransition(() => {
      router.refresh();
    });
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"}>
          <BoxRemove />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Product</DialogTitle>
          <DialogDescription>Do you want to delete ?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <form action={handleDelete}>
            <input type="hidden" name="id" defaultValue={productId} />
            <Button type="submit">
              {isPending ? "Deleting..." : "Delete"}
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
