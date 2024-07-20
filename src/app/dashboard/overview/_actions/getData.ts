export async function getData() {
  const res = await fetch("/api/analytics", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  return data.data;
}
