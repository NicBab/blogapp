import axios from "axios"

const BASE_URL = "https://blog-app-wvlc.onrender.com";

export const axiosInstance = axios.create({ baseURL : BASE_URL });



