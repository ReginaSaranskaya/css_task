async function fetchItems() {
  const response = await fetch("http://localhost:3006/items");

  return await response.json();
}

async function fetchItem() {
  const response = await fetch("http://localhost:3006/items/1")

  return await response.json();
}