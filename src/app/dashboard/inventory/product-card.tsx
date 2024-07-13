import Image from "next/image";
import { Button } from "@/components/ui/button";

type Product = {
  name: string;
  price: number;
  code: string;
};

export const ProductCard = (props: Product) => {
  return (
    <div className="border flex flex-col items-center gap-2">
      <Image
        src={""}
        height={48}
        width={48}
        alt="image of product"
        className="w-full bg-black"
      ></Image>
      <div>{props.name}</div>
      <div>{props.code}</div>
      <div>{props.price}</div>
      <div className="flex gap-4">
        <Button variant="destructive">Delete</Button>
        <Button variant="secondary">Update</Button>
      </div>
    </div>
  );
};
