import { TProduct } from "@/lib/zod-schema";

export async function addProduct(formData: TProduct) {
  console.log(formData);
  const response = await fetch("/api/products", {
    method: "POST",
    body: JSON.stringify(formData),
  });
  const res = response.json();

  return res;
}
