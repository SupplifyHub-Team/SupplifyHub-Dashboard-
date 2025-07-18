import { refreshToken } from "@/services/authService";
import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
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
    const config = error.config as AxiosRequestConfig & { _retry?: boolean };

    if (
      error.response?.status === 401 &&
      !config._retry &&
      !config.url?.includes("/api/Auth/refresh")
    ) {
      config._retry = true;

      try {
        const data = await refreshToken();

        localStorage.setItem("token", data.accessToken);

        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${data.accessToken}`,
        };

        return api.request(config);
      } catch (refreshError) {
        localStorage.removeItem("token");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
