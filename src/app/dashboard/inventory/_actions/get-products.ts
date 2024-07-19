export async function getProducts() {
  const res = await fetch("/api/products", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  const products = data.products;
  return products;
}
