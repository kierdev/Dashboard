export async function getProduct(id: string) {
  const res = await fetch(`/api/products?id=${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();

  const product = data.products;

  return product;
}
