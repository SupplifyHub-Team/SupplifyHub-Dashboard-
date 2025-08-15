import { loginSchema } from "@/schemas/loginSchema";
import api from "../lib/axios";
import { isAxiosError } from "axios";
export async function loginService(data:loginSchema) {
  try {
    const response = await api.post<IAdmin>("/api/login", data);
    return response?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "حدث خطأ ما حاول مرة أخرى "
      );
    }
    throw error;
  }
}


export async function refreshToken() {
  try {
    const response = await api.post<IRefreshResponse>("/api/auth/refresh");
    return response?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "حدث خطأ ما حاول مرة أخرى "
      );
    }
    throw error;
  }
}