// frontend/src/api/apiClient.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4000/api/v1/users", // Base URL for user endpoints
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${sessionStorage.getItem("jwt") || ""}`,
  },
});

export default apiClient;
