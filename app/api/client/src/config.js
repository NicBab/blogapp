import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://mernblogapp.herokuapp.com/api"
})
