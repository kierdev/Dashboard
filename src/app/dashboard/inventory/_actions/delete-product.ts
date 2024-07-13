export async function deleteProduct(id: string) {
  console.log("DEL");
  console.log(id);

  const response = await fetch("/api/products", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  return response;
}
