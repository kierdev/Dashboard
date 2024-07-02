"use client";
import { ProductCard } from "./product-card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function InventoryPage() {
  const router = useRouter();
  return (
    <section className="grid grid-cols-6 w-full">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <div className="fixed right-8 bottom-8">
        <Button
          onClick={() => {
            router.push("/inventory/create");
          }}
        >
          Add Product
        </Button>
      </div>
    </section>
  );
}
