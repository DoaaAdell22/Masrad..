import axios from "axios";
const instance = axios.create({
  baseURL: "https://backend.masrad.sa/api/",
  headers: {},
});
export default instance;
