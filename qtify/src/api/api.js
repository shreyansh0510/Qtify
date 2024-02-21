import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    let result = await response.data
    return result
  } catch (e) {
    console.log(e);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    let result = await response.data
    return result
  } catch (e) {
    console.log(e);
  }
};
