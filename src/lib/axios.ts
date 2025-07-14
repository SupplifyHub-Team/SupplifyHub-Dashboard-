import { refreshToken } from "@/services/authService";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;
    if (error.response?.status === 401 ) {
      config.isRetry = true;
      try {
        localStorage.removeItem("token");
        const data = await refreshToken();
        localStorage.setItem("token", data.data.accessToken);
        config.headers["Authorization"] = `Bearer ${data.data.accessToken}`;
        return api.request(config);
      } catch (refreshError) {
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    window.location.href = "/login";
    return Promise.reject(error);
  }
);

export default api;
