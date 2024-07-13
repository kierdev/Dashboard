export async function updateProduct() {
  console.log("Put");

  const response = await fetch("/api/products", {
    method: "PUT",
    body: JSON.stringify({
      target: "668a58c475ec8b60dbf8e53a",
      id: "asd",
      name: "Jeans 20",
      price: 200,
      category: "Pants",
      code: "#ABC123",
      image_url: "",
      acquisitionCost: 100,
    }),
  });
}
