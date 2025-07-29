import { refreshToken } from "@/services/authService";
import useAuth from "@/store/authStore";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "sonner";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      window.location.href = "/login";
      toast.error("يرجى تسجيل الدخول مرة أخرى");
      originalRequest._retry = true;
      try {
        const response = await refreshToken();
        console.log("yay new access token", response.accessToken);
        const accessToken = response.accessToken;
        Cookies.set("token", accessToken);

        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        Cookies.remove("token");
        const logout = useAuth.getState().logout;

        logout();
        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
