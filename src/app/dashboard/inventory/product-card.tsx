import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "postcss";
import { deleteProduct } from "./_actions/delete-product";
import Link from "next/link";

type Product = {
  id: string;
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
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">Delete</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogTitle>
              <Label>Are you sure you want to delete this item?</Label>
            </DialogTitle>
            <Button
              type="button"
              variant="destructive"
              onClick={() => {
                deleteProduct(props.id);
              }}
            >
              Yes
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
        <Button variant="secondary">
          <Link href={`/dashboard/inventory/update/${props.id}`}>Update</Link>
        </Button>
      </div>
    </div>
  );
};
