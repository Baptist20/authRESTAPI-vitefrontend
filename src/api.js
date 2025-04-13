import axios from "axios";

const api = axios.create({
  baseURL: "https://authrestapi-vite.onrender.com/api/auth",
  withCredentials: true,
});

export default api;
