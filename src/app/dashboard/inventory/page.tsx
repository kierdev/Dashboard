"use client";
import { ProductCard } from "./product-card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getProducts } from "./_actions/get-products";

export default function InventoryPage() {
  type Product = {
    _id: string;
    name: string;
    price: number;
    code: string;
  };

  const [products, setProducts] = useState<Product[]>([]);

  const router = useRouter();

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="grid grid-cols-6 w-full">
      {products.map((product: Product, index) => {
        return (
          <ProductCard
            key={index}
            id={product._id}
            name={product.name}
            code={product.code}
            price={product.price}
          />
        );
      })}
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
