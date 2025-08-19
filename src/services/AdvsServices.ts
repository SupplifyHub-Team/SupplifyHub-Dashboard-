import api from "@/lib/axios";
import { isAxiosError } from "axios";

export async function getPendingAdvs() {
  try {
    const response = await api.get<IApiResponse<IPendingAdv[]>>(
      "api/advertisment-to-accept"
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "حدث خطأ ما حاول مرة أخرى "
      );
    }
    throw error;
  }
}

// function to get active advs
export async function getActiveAdvs() {
  try {
    const response = await api.get<IApiResponse<IActiveAdv[]>>(
      "api/advertisment-admin"
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "حدث خطأ ما حاول مرة أخرى "
      );
    }
    throw error;
  }
}

// path function to accept an advertisement
export async function patchAcceptAdv(id: string | number) {
  try {
    const response = await api.patch(`api/advertisment/${id}`);
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

// funcation to reject an advertisement
export async function deletePendingAdv(id: string | number) {
  try {
    const response = await api.delete(`api/advertisment/${id}`);
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
