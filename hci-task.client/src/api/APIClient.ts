import axios from "axios";
console.log(import.meta.env.VITE_API_URL);
export const APIClient = axios.create({
  baseURL: "/api", //import.meta.env.VITE_API_URL,
  // baseURL: "https://localhost:7129/api",
});
