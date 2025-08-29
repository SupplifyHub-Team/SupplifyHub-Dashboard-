import api from "@/lib/axios";
import { isAxiosError } from "axios";

export interface IGetOrdersFilters {
  page?: number;
  pageSize?: number;
  search?: string;
  status?: string;
  category?: string;
  sortColumn?: string;
  sortColumnDirection?: "Asc" | "Desc";
  sortBy?: string;
}

export async function getOrders(filters: IGetOrdersFilters) {
  try {
    const response = await api.get<IPaginatedResponse<IOrder>>(
      `/admin/orders`,
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

interface IAdditionalOrdersParams {
  page?: number;
  pageSize: number;
}
export async function getAdditionalOrders(filters: IAdditionalOrdersParams) {
  try {
    const response = await api.get<IPaginatedResponse<IAdditionalOrders>>(
      `/admin/accept-order-request`,
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

export async function patchAdditionalOrders(
  requestId: string,
  operationType: string
) {
  try {
    const res = await api.patch(
      `/admin/accept-cancel-accepted-order-request?requestId=${requestId}&operationType=${operationType}`
    );
    return res?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "Failed to accept order"
      );
    }
    throw error;
  }
}
