import axios from "axios";

const baseURL = "http://localhost:3000";
export const initialAxios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
