import api from "@/lib/axios";
import { isAxiosError } from "axios";

// function to get active advs
export async function getActiveAdvs(filters: IActiveAdvsFilters) {
  try {
    const response = await api.get<IPaginatedResponse<IActiveAdv>>(
      `/admin/advertisment`,
      {
        params: filters,
      }
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorResponse: IErrorResponse = error.response?.data;
      throw new Error(errorResponse.data.message);
    }
    console.error("An unexpected error occurred:", error);
    throw error;
  }
}

export async function getPendingAdvs() {
  try {
    const response = await api.get<IApiResponse<IPendingAdv[]>>(
      "/admin/advertisment-to-accept"
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
    const response = await api.patch(`/admin/advertisment/${id}`);
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
    const response = await api.delete(`/admin/advertisment/${id}`);
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

interface IAdditionalAdvsParams {
  page?: number;
  pageSize: number;
}
export async function getAdditionalAdvs(filters: IAdditionalAdvsParams) {
  try {
    const response = await api.get<IPaginatedResponse<IAdditionalAdvs>>(
      `/admin/Advertisement-request`,
      {
        params: filters,
      }
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorResponse: IErrorResponse = error.response?.data;
      throw new Error(errorResponse.data.message);
    }
    console.error("An unexpected error occurred:", error);
    throw error;
  }
}

export async function patchAdditionalAdvs(
  requestId: string,
  operationType: string
) {
  try {
    const res = await api.patch(
      `/admin/accept-cancel-advertisement-request?requestId=${requestId}&operationType=${operationType}`
    );
    return res?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.message || "Failed to accept adv");
    }
    throw error;
  }
}

// funcation to post event by admin
export async function postEvent(formData: FormData) {
  try {
    const res = await api.post<IApiResponse<IAddEventResponse>>(
      "/admin/advertisment",
      formData
    );

    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.message || "Failed to add event");
    }
    throw error;
  }
}

// delete active advs
export async function deleteActiveAdv(id: string | number) {
  try {
    const response = await api.delete(`/admin/active-advertisement/${id}`);
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
