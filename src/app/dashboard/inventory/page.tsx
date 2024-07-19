"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import ProductList from "./_components/product-list";

export default function InventoryPage() {
  const router = useRouter();

  return (
    <section className="w-full h-screen flex">
      <ProductList />
      <div className="fixed right-8 bottom-8">
        <Button
          onClick={() => {
            router.push("/dashboard/inventory/create");
          }}
        >
          Add Product
        </Button>
      </div>
    </section>
  );
}
