const getItemsFromApi = async () => {
  const response = await fetch("http://localhost:3000/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

// Post an item to API
const postItemToApi = async (data) => {
  const response = await fetch("http://localhost:3000/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

// Delete an item from API
const deleteItemFromApi = async (id) => {
  const response = await fetch(`http://localhost:3000/${id}`, {
    method: "DELETE",
  });

  return response.text();
};
