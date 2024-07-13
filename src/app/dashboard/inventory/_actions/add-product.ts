export async function addProduct() {
  console.log("Post");

  const response = await fetch("/api/products", {
    method: "POST",
    body: JSON.stringify({
      name: "Jeans 12",
      price: 200,
      category: "Pants",
      code: "#ABC123",
      image_url: "",
      acquisitionCost: 100,
    }),
  });
  const res = response.json();
  console.log(res);

  return res;
}
