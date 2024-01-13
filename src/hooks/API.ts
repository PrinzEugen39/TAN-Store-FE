import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:6900/api/v1",
  withCredentials: true,
});

export default API;
