"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Dropzone from "react-dropzone";
import Image from "next/image";
import { ImageIcon, XCircleIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// UI Components
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
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FormCreateNewProductCategories } from "@/action/product-action";

// Validation Schema
const ProductCategorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  image: z.instanceof(File, { message: "Image is required" })
    .refine(file => file.size <= 5 * 1024 * 1024, "Max image size is 5MB")
    .refine(
      file => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      "Only .jpg, .png, .webp formats are supported"
    ),
});

export function DialogCreateProductCategory() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm({
    resolver: zodResolver(ProductCategorySchema),
    defaultValues: {
      name: "",
      image: null,
    },
  });

  const imageFile = form.watch("image");

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    try {
      // Create FormData for file upload
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("photo", formData.image);
      await FormCreateNewProductCategories(payload);
      // Simulate API call
      // const response = await fetch('/api/product-categories', {
      //   method: 'POST',
      //   body: payload
      // });
      
      // if (!response.ok) throw new Error('Failed to create category');

      // Success feedback
      toast.success("Product category created successfully!");
      form.reset();
      setOpen(false);
      router.refresh();
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <PlusIcon className="h-4 w-4" />
          New Category
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Product Category</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g. Electronics, Clothing" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Image Upload Field */}
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category Image</FormLabel>
                  <FormControl>
                    <div className="space-y-2">
                      {imageFile ? (
                        <div className="relative group">
                          <div className="relative aspect-square w-full max-w-[200px] rounded-md overflow-hidden">
                            <Image
                              src={URL.createObjectURL(imageFile)}
                              alt="Preview"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => form.setValue("image", null)}
                            className="absolute -top-2 -right-2 bg-background rounded-full p-1 shadow-sm"
                          >
                            <XCircleIcon className="h-5 w-5 text-destructive" />
                          </button>
                        </div>
                      ) : (
                        <Dropzone
                          onDrop={acceptedFiles => {
                            form.setValue("image", acceptedFiles[0], {
                              shouldValidate: true
                            });
                          }}
                          accept={{
                            'image/jpeg': ['.jpeg', '.jpg'],
                            'image/png': ['.png'],
                            'image/webp': ['.webp']
                          }}
                          maxFiles={1}
                          multiple={false}
                        >
                          {({ getRootProps, getInputProps, isDragActive }) => (
                            <div
                              {...getRootProps()}
                              className={cn(
                                "border-2 border-dashed rounded-md p-6 text-center cursor-pointer transition-colors",
                                isDragActive 
                                  ? "border-primary bg-primary/10" 
                                  : "border-border"
                              )}
                            >
                              <input {...getInputProps()} />
                              <div className="flex flex-col items-center gap-2">
                                <ImageIcon className="h-8 w-8 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">
                                  Drag & drop an image here, or click to select
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  JPEG, PNG, or WEBP (Max 5MB)
                                </p>
                              </div>
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
            
            <div className="flex justify-end gap-2 pt-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Creating..." : "Create Category"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}