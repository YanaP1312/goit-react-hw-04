import axios from "axios";

export async function fetchImagesWithPhoto(query, page) {
  axios.defaults.baseURL = "https://api.unsplash.com";
  const myApiKey = "z_1cL7_czUThYTzFTdVk3GkCtU762TCDzKRopZnNCR8";

  const response = await axios.get("/search/photos/?", {
    params: {
      client_id: myApiKey,
      query: query,
      page: page,
      per_page: 15,
      orientation: "landscape",
    },
  });
  return response.data.results;
}

// export async function fetchImagesWithPhoto() {
//   axios.defaults.baseURL = "https://api.unsplash.com";
//   const myApiKey = "z_1cL7_czUThYTzFTdVk3GkCtU762TCDzKRopZnNCR8";

//   const response = await axios.get("/search/photos/?", {
//     params: {
//       client_id: myApiKey,
//       query: "fox",
//     },
//   });

//   return response.data;
// }

// fetchImagesWithPhoto()
//   .then((photos) => console.log(photos))
//   .catch((error) => console.log(error));

// console.log(fetchImagesWithPhoto);
