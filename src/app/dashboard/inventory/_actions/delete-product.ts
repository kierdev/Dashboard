export async function deleteProduct(id: string) {
  const response = await fetch("/api/products", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  return response;
}
