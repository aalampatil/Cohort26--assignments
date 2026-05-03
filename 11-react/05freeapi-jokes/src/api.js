// src/api.js
import axios from "axios";

const API_URL = "https://api.freeapi.app/api/v1/public/randomjokes";

export const fetchJokes = async (page = 1) => {
  try {
    const res = await axios.get(`${API_URL}?page=${page}`);

    console.log("JOKES API:", res.data);

    return res.data?.data || {};
  } catch (error) {
    console.error(error);
    return {};
  }
};