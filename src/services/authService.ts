import { loginSchema } from "@/schemas/loginSchema";
import api from "../lib/axios";
import { handleApiError } from "@/utils/handleApiError";
export async function loginService(data: loginSchema) {
  try {
    const response = await api.post<IAdmin>("/login", data);
    return response?.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function refreshToken() {
  try {
    const response = await api.post<IRefreshResponse>("/refresh");
    return response?.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
