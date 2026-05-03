// src/api.js
import axios from "axios";

const API_URL = "https://api.freeapi.app/api/v1/public/cats/cat/random";

export const fetchCat = async () => {
  try {
    const res = await axios.get(API_URL);

    console.log("CAT API:", res.data);

    return res.data?.data || null;

  } catch (error) {
    console.error(error);
    return null;
  }
};