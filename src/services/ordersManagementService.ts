import api from "@/lib/axios";
import { isAxiosError } from "axios";

interface getOrdersParams {
  Page?: string;
  PageSize?: string;
  search?: string;
  status?: string;
  sortColumn?: string;
  sortColumnDirection?: string;
  category?: string;
  sortBy?: string; 
}

export async function getOrders(params: getOrdersParams) {
  const apiParams: Record<string, string> = {
    Page: params.Page || "1",
    PageSize: params.PageSize || "3",
  };

  if (params.search) {
    apiParams.search = params.search;
  }

  if (params.status) {
    apiParams.status = params.status;
  }

  if (params.category) {
    apiParams.category = params.category;
  }

  if (params.sortBy) {
    const [column, direction] = params.sortBy.split("_");
    if (column && direction) {
      apiParams.sortColumn = column;
      apiParams.sortColumnDirection = direction;
    }
  }

  try {
    const queryParams = new URLSearchParams(apiParams);
    const response = await api.get<IPaginatedResponse<IOrder>>(
      `/api/orders?${queryParams.toString()}`
    );

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.message || "Failed to fetch orders");
    }
    throw new Error("An unexpected error occurred while fetching orders");
  }
}
