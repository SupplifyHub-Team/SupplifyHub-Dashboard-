import axios from "axios";
import Cookies from "js-cookie";

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

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         const response = await refreshToken();
//         console.log("yay new access token", response.accessToken);
//         const accessToken = response.accessToken;
//         localStorage.setItem("token", accessToken);

//         api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
//         return api(originalRequest);
//       } catch (refreshError) {
//         console.error("Token refresh failed:", refreshError);
//         localStorage.removeItem("token");
//         const logout = useAuth.getState().logout;

//         logout();
//         window.location.href = "/login";

//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export default api;
