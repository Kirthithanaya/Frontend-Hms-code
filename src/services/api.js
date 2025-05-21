import axios from "axios";

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: "https://backend-hms-code-1.onrender.com/api", // Change to your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add an interceptor to include token in requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get token from local storage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
