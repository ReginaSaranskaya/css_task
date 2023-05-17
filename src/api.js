export async function getItemList() {
  const response = await fetch(`${process.env.API_URL}/items`);

  return await response.json();
}

export async function getItem(id = 1) {
  const response = await fetch(`${process.env.API_URL}/items/${id}`);

  return await response.json();
}
