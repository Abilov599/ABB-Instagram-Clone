import axios from "axios";

const BASE_URL = "https://instagram.brightly-shining.cloud/api/v1/";
const customHeaders = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  "Content-Type": "application/json",
  // Add any other headers you need here
};

// Create an Axios instance with default headers (optional)
const userApi = axios.create({
  baseURL: BASE_URL,
  headers: customHeaders,
});

export default userApi;
