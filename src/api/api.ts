import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-fin-vue.vercel.app",
});
