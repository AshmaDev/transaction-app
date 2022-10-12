import axios from "axios";
import { apiUrl } from "../constants/api-config";

const http = axios.create({
  baseURL: apiUrl,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default http;
