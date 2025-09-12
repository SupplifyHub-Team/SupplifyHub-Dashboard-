import api from "@/lib/axios";
import { handleApiError } from "@/utils/handleApiError";

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
    throw handleApiError(error);
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
    throw handleApiError(error);
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
    throw handleApiError(error);
  }
}
