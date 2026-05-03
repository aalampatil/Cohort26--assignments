// src/api.js
import axios from "axios";

const API_URL = "https://api.freeapi.app/api/v1/public/quotes";

export const fetchQuotes = async (page = 1) => {
  try {
    const res = await axios.get(`${API_URL}?page=${page}`);

    console.log("QUOTE API:", res.data);

    return res.data?.data?.data || []; // ✅ correct

  } catch (error) {
    console.error(error);
    return [];
  }
};

