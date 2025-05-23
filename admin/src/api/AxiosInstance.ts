import axios from "axios";

const Axios = axios.create({
  //   baseURL: process.env.REACT_APP_API_BASE_URL,
  baseURL: "http://localhost:8080",
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor (e.g., attach token)
Axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response Interceptor
Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
    }
    return Promise.reject(error);
  },
);

export default Axios;
