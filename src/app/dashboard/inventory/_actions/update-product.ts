import { TProduct } from "@/lib/zod-schema";

export async function updateProduct(data: TProduct) {
  const response = await fetch("/api/products", {
    method: "PUT",
    body: JSON.stringify(data),
  });
  return await response.json();
}
