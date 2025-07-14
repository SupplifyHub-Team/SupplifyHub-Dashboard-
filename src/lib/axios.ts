import { refreshToken } from "@/services/authService";
import axios from "axios";
import { as } from "node_modules/react-router/dist/development/lib-B33EY9A0.d.mts";

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
   (response) =>  response,
  async (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      const accessToken = await refreshToken();
      localStorage.setItem("token", accessToken.token);
    }
    return Promise.reject(error);
  }
);

export default api;
