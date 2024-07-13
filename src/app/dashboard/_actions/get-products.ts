export async function getProducts() {
  const res = await fetch("/api/products", {
    headers: {
      method: "GET",
      "content-type": "application/json",
    },
  });
  const products = await res.json();
  return products;
}
