import Image from "next/image";
import { Button } from "@/components/ui/button";
export const ProductCard = () => {
  return (
    <div className="border flex flex-col items-center gap-2">
      <Image
        src={""}
        height={48}
        width={48}
        alt="image of product"
        className="w-full bg-black "
      ></Image>
      <div>Product</div>
      <div>Price</div>
      <div className="flex gap-4">
        <Button variant="destructive">Delete</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </div>
  );
};
