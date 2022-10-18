// Get all items from API

// const getAsyncItemsFromApi = async () => {
//   return await fetch("http://localhost:3000", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((response) => {
//     console.log("Got response");
//     return response.json();
//   });
// };

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
