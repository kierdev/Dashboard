"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import { generateCode } from "../_actions/generate-code";
import { zodResolver } from "@hookform/resolvers/zod";
import { TProduct, productSchema } from "@/lib/zod-schema";
import { addProduct } from "../_actions/add-product";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { calculateGrossProfit } from "../_actions/calculate-gross-profit";
import { calculateMargin } from "../_actions/calculate-margin";

export default function CreatePage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setValue,
    getValues,
    watch,
  } = useForm<TProduct>({ resolver: zodResolver(productSchema) });

  const { toast } = useToast();
  const router = useRouter();

  const [image, setImage] = useState("");

  const handleCalculations = () => {
    const acquisitionCost = getValues("acquisitionCost");
    const price = getValues("price");
    setValue("grossProfit", calculateGrossProfit(price, acquisitionCost));
    setValue("margin", calculateMargin(price, acquisitionCost));
  };

  const onSubmit: SubmitHandler<TProduct> = async (data: TProduct) => {
    data.image = image;
    console.log(data);

    await addProduct(data)
      .then(() => {
        toast({
          title: "Success!",
          description: "Product has been added to inventory.",
        });
        router.push("/dashboard/inventory");
      })
      .catch(() => {
        toast({
          title: "Error!",
          description: "There was an error adding product",
          variant: "destructive",
        });
      });
  };

  return (
    <section className="w-full max-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4 w-full h-screen"
      >
        <div className="inline-flex items-start flex-col w-full border">
          <div className="flex flex-row items-start flex-wrap w-full gap-4 border p-8">
            <div className="grid w-full max-w-xs gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                {...register("name")}
                type="text"
                placeholder="Enter product name"
              />
            </div>
            <div className="grid w-full max-w-xs items-center gap-1.5">
              <Label htmlFor="category">Category</Label>
              <Input
                {...register("category")}
                type="text"
                placeholder="Enter product category"
              />
            </div>
            <div className="grid w-full max-w-xs items-center gap-1.5">
              <Label htmlFor="category">Color</Label>
              <Input
                {...register("color")}
                type="text"
                placeholder="Enter product category"
              />
            </div>
            <div className="grid w-full max-w-xs items-center gap-1.5">
              <Label htmlFor="code">Code</Label>
              <div className="flex gap-4">
                <Input
                  {...register("code")}
                  type="text"
                  placeholder="Generate product code"
                />
                <Button
                  type="button"
                  onClick={() => {
                    setValue("code", generateCode());
                  }}
                >
                  Generate
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start flex-wrap w-full gap-4 border p-8">
            <div className="grid w-full max-w-xs items-center gap-1.5">
              <Label htmlFor="acquisition-cost">Acquisition Cost</Label>
              <Input
                {...register("acquisitionCost", {
                  valueAsNumber: true,
                  onChange: () => {
                    const val = getValues("acquisitionCost");
                    setValue("acquisitionCost", Number(val));
                    handleCalculations();
                  },
                })}
                type="text"
                placeholder="Enter product acquisition cost"
              />
            </div>
            <div className="grid w-full max-w-xs items-center gap-1.5">
              <Label htmlFor="price">Price</Label>
              <Input
                {...register("price", {
                  valueAsNumber: true,
                  onChange: () => {
                    const val = getValues("price");
                    setValue("price", Number(val));
                    handleCalculations();
                  },
                })}
                type="text"
                placeholder="Enter product price"
              />
            </div>
            <div className="grid w-full max-w-xs items-center gap-1.5">
              <Label htmlFor="margin">
                Margin{" "}
                <span className="text-green-500">+ {watch("margin")} %</span>
              </Label>
              <Input {...register("margin")} type="hidden" />
              <Label htmlFor="grossProfit">
                Gross Profit{" "}
                <span className="text-green-500">
                  PHP{watch("grossProfit")}
                </span>
              </Label>
              <Input {...register("grossProfit")} type="hidden" />
            </div>
          </div>
          <div className="flex flex-row items-start flex-wrap w-full gap-4 border p-8">
            <div className="grid w-full max-w-xs items-center gap-1.5">
              <Label htmlFor="status">Status</Label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                title="Status"
                id="status"
                {...register("status")}
              >
                <option className="bg-black" value="Available">
                  Available
                </option>
                <option className="bg-black" value="Unavailable">
                  Unavailable
                </option>
                <option className="bg-black" value="Sold">
                  Sold
                </option>
              </select>
            </div>
            <div className="grid w-full max-w-xs items-center gap-1.5">
              <Label htmlFor="price">Date Acquired</Label>
              <Input
                {...register("dateAcquired")}
                type="date"
                placeholder="Enter product price"
              />
            </div>
            <div className="grid w-full max-w-xs items-center gap-1.5">
              <Label htmlFor="price">Date Released</Label>
              <Input
                {...register("dateReleased")}
                type="date"
                placeholder="Enter product price"
              />
            </div>
          </div>
          <div className="flex flex-row items-start flex-wrap w-full gap-4 border p-8">
            <div className="grid w-full max-w-xs items-center gap-1.5">
              <Label htmlFor="image">Image</Label>
              <Image
                src={image}
                height={48}
                width={48}
                alt="image of product"
                className="w-1/4 justify-self-center aspect-auto border"
              ></Image>
              <Input
                {...register("image")}
                type="file"
                accept="image/*"
                placeholder="Upload product image"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  var reader = new FileReader();
                  if (!e.target.files) {
                    return;
                  }
                  reader.readAsDataURL(e.target.files[0]);
                  reader.onload = () => {
                    const image = reader.result as string;
                    setImage(image);
                  };
                  reader.onerror = (error) => {
                    console.log(error);
                  };
                }}
              />
            </div>

            <div className="grid w-full max-w-xs items-center gap-1.5">
              <Label htmlFor="message">Description</Label>
              <Textarea
                {...register("description")}
                placeholder="Enter product description"
                className="resize-none pb-24"
              />
            </div>
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Loading..." : "Save"}
          </Button>
        </div>
      </form>
    </section>
  );
}
