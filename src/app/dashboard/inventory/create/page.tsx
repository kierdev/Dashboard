"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { addProduct } from "../_actions/add-product";
export default function CreatePage() {
  return (
    <section className="w-full">
      <form className="inline-flex flex-wrap gap-4 border w-full py-10 px-20">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Product name" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="price">Price</Label>
          <Input type="text" id="price" placeholder="Product price" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="category">Category</Label>
          <Input type="text" id="category" placeholder="Product category" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="code">Code</Label>
          <div className="flex gap-4">
            <Input type="text" id="code" placeholder="Product code" />
            <Button>Generate</Button>
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="image-url">Image URL</Label>
          <Input type="text" id="image-url" placeholder="Product Image URL" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="image-url">Acquisition Cost</Label>
          <Input
            type="text"
            id="acquisition-cost"
            placeholder="Product acquisition cost"
          />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Description</Label>
          <Textarea
            placeholder="Type the important details of the product"
            id="description"
          />
        </div>
      </form>
      <div className="grid w-full gap-1.5">
        <Button
          onClick={() => {
            addProduct();
          }}
        >
          Save
        </Button>
      </div>
    </section>
  );
}
