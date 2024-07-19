import { useState, useEffect } from "react";
import { getProducts } from "../_actions/get-products";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil } from "lucide-react";
import { DeleteDialog } from "./delete-dialog";
import { calculateUnsoldInterval } from "../_actions/calculate-unsoldInterval";
import { formatReleasedDate } from "../_actions/format-date";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Label } from "@radix-ui/react-label";
export default async function ProductList() {
  type Product = {
    _id: string;
    code: string;
    name: string;
    price: number;
    category: string;
    acquisitionCost: number;
    margin: number;
    grossProfit: number;
    status: string;
    dateReleased: any;
    image: string;
    description: string;
  };
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Table className="w-full">
      <TableHeader className="w-full">
        <TableRow className="w-screen">
          <TableHead className="border text-center w-[6%]">View</TableHead>
          <TableHead className="border text-center w-[6%]">Code</TableHead>
          <TableHead className="border text-center w-[11.5%]">Name</TableHead>
          <TableHead className="border text-center w-[6%]">Category</TableHead>
          <TableHead className="border text-center w-[6%]">Price</TableHead>
          <TableHead className="border text-center w-[11.5%]">
            Acquisition Cost
          </TableHead>
          <TableHead className="border text-center w-[6%]">Margin</TableHead>
          <TableHead className="border text-center w-[6%]">Profit</TableHead>
          <TableHead className="border text-center w-[6%]">Status</TableHead>
          <TableHead className="border text-center w-[11.5%]">
            Unsold Interval
          </TableHead>
          <TableHead className="border text-center w-[11.5%]">
            Release Date
          </TableHead>
          <TableHead className="border text-center w-[6%]">Edit</TableHead>
          <TableHead className="border text-center w-[6%]">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product, index) => (
          <TableRow
            onClick={() => {}}
            className="cursor-pointer w-screen"
            key={index}
          >
            <TableCell className="text-center border">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">View</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{product.name}</DialogTitle>
                    <DialogDescription>
                      <Image
                        src={product.image}
                        height={100}
                        width={100}
                        alt="Product preview"
                        className="w-full"
                      ></Image>
                      <Label>{product.description}</Label>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </TableCell>
            <TableCell className="text-center border">{product.code}</TableCell>
            <TableCell className="text-center border">{product.name}</TableCell>
            <TableCell className="text-center border">
              {" "}
              {product.category}
            </TableCell>
            <TableCell className="text-center border">
              {product.price}
            </TableCell>
            <TableCell className="text-center border">
              {product.acquisitionCost}
            </TableCell>
            <TableCell className="text-green-500 text-center border">
              {product.margin}
            </TableCell>
            <TableCell className="text-green-500 text-center border">
              {product.grossProfit}
            </TableCell>
            <TableCell className="text-center border">
              {product.status}
            </TableCell>
            <TableCell className="text-center border">
              {calculateUnsoldInterval(product.dateReleased)} Days
            </TableCell>
            <TableCell className="text-center border">
              {formatReleasedDate(product.dateReleased)}
            </TableCell>
            <TableCell className="text-center border">
              <Pencil
                onClick={() => {
                  router.push(`/dashboard/inventory/update/${product._id}`);
                }}
                className="text-yellow-500 cursor-pointer m-auto"
              />
            </TableCell>
            <TableCell className="text-center border">
              <DeleteDialog id={product._id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
