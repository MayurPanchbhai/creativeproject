/** @format */

import axios from "axios";

const apiData = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 3000,
});

export default apiData;
