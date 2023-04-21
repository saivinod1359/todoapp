import axios from "axios";

export const axiosReq = axios.create({
    baseURL: "https://dummy.restapiexample.com/api/v1",
    // timeout: 1000,
    headers: {"Content-Type": "application/json"}
  });