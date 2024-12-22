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
