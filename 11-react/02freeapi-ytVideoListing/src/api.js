// src/api.js
import axios from "axios";

const API_URL = "https://api.freeapi.app/api/v1/public/youtube/videos";

export const fetchVideos = async () => {
  try {
    const res = await axios.get(API_URL);
    console.log(res.data.data.data)
    return res.data.data.data; // adjust based on API response
  } catch (error) {
    console.error(error);
    return [];
  }
};