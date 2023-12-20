import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:6900/api/v1",
});

export default API;

// export const setAuthToken = (token:string) => {
//     if (token) {
//         API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     } else {
//         delete API.defaults.headers.common["Authorization"];
//     }
// }
