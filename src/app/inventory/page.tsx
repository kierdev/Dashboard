import { ProductCard } from "./product-card";
import { Button } from "@/components/ui/button";
export default function InventoryPage() {
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
        <Button>Add Product</Button>
      </div>
    </section>
  );
}
