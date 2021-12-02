import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key":
        "70f9e521f9mshb75354bd9b3d948p1e177bjsn633dbb21d6b8",
    },
  });

  return data;
};
