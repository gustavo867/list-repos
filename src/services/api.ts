import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/gustavo867",
});

export default api;
