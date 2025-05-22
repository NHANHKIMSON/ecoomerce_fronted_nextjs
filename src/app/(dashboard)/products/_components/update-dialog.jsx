"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Dropzone from "react-dropzone";
import Image from "next/image";
import { ImageIcon, XCircleIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { Edit } from "iconsax-reactjs";
import { FormUpdateProduct } from "@/action/product-action";

const ProductFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.string().min(1, "Price is required"),
  description: z.string().min(1, "Description is required"),
  categoryId: z.string().min(1, "Category is required"),
  instock: z.string().min(0,"Instock require!"),
  image: z.any().refine((file) => file instanceof File, "Image is required"),
});

export function DialogUpdateProduct({ product, categories = []}) {
  const form = useForm({
    resolver: zodResolver(ProductFormSchema),
    defaultValues:{
      name: product.name || '',
      price: product.price?.toString() || '',
      description: product.description || '',
      categoryId: product.category_id?.toString() || '',
      instock: product.instock.toString(),
      image: undefined,
    }
  });
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loaiding, setLoading] = useState(false);
  const imageFile = form.watch("image");
  const id = product.id;

  const onSubmit = async (data) => {
    setLoading(true);
    await FormUpdateProduct(data, id);
    toast.success("Product upated successfully!", {
      description: (
        <pre className="mt-2 w-[340px] rounded bg-slate-950 p-4 text-white text-xs">
          {JSON.stringify(
            {
              ...data,
              image: data.image?.name,
            },
            null,
            2
          )}
        </pre>
      ),
    });
    setOpen(false);
    router.refresh();
    setLoading(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={"bg-blue-600 hover:bg-blue-600"}>
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
        </DialogHeader>
        <Form {...form} enctype="multipart/form-data">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 pt-4"
          >
            {/* Product Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Product name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 10.99" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2">
              {/* Category */}
              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.id} value={String(cat.id)}>
                            {cat.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="instock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instock</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 10.99"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write a short description..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Image Upload */}
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                    <div>
                      {imageFile ? (
                        <div className="relative aspect-square w-40">
                          <button
                            type="button"
                            onClick={() => form.setValue("image", null)}
                            className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
                          >
                            <XCircleIcon className="h-5 w-5 fill-primary text-primary-foreground" />
                          </button>
                          <Image
                            src={URL.createObjectURL(imageFile)}
                            alt="Preview"
                            width={500}
                            height={500}
                            className="border border-border h-full w-full rounded-md object-cover"
                          />
                        </div>
                      ) : (
                        <Dropzone
                          onDrop={(acceptedFiles) => {
                            const file = acceptedFiles[0];
                            if (file) {
                              form.setValue("image", file);
                            }
                          }}
                          accept={{
                            "image/*": [".png", ".jpg", ".jpeg", ".webp"],
                          }}
                          maxFiles={1}
                        >
                          {({
                            getRootProps,
                            getInputProps,
                            isDragActive,
                            isDragAccept,
                            isDragReject,
                          }) => (
                            <div
                              {...getRootProps()}
                              className={cn(
                                "border border-dashed flex items-center justify-center aspect-square w-40 rounded-md focus:outline-none focus:border-primary",
                                {
                                  "border-primary bg-secondary":
                                    isDragActive && isDragAccept,
                                  "border-destructive bg-destructive/20":
                                    isDragActive && isDragReject,
                                }
                              )}
                            >
                              <input {...getInputProps()} />
                              <ImageIcon
                                className="h-12 w-12"
                                strokeWidth={1.25}
                              />
                            </div>
                          )}
                        </Dropzone>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              {loaiding ? "Updating" : "Update Product"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}