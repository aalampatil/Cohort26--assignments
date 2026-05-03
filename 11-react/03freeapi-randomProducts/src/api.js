// src/api.js
import axios from "axios";

const API_URL = "https://api.freeapi.app/api/v1/public/randomproducts";

export const fetchProducts = async () => {
  try {
    const res = await axios.get(API_URL);

    console.log("API:", res.data);


    return res.data?.data?.data || [];

  } catch (error) {
    console.error(error);
    return [];
  }
};