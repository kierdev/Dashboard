export async function getProducts() {
  const res = await fetch("/api/products", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const products = await res.json();
  return products;
}
