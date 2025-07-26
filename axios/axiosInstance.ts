import { getBaseURL } from "@/helpers/getBaseURL";
import axios from "axios";

const BASE_URL = getBaseURL();

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
