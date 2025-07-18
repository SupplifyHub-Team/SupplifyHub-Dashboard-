import api from "@/lib/axios";
import { TABLE_ROWS } from "@/lib/constants";
import { isAxiosError } from "axios";

interface GetAllUsersParams {
  page?: string;
  pageSize?: string;
  search?: string; 
  role?: string; 
  category?: string; 
  sortColumn?: string; 
  sortColumnDirection?: string; 
  sortBy?: string; 
}

export default async function getAllUsers(params: GetAllUsersParams) {
  const apiParams: Record<string, string> = {
    page: params.page || "1",
    pageSize: params.pageSize || TABLE_ROWS.toString(),
  };

  if (params.search) {
    apiParams.search = params.search;
  }

  if (params.role) {
    apiParams.role = params.role;
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
    const response = await api.get(`/api/users?${queryParams.toString()}`);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "حدث خطأ ما, حاول مرة أخرى"
      );
    }
    throw error;
  }
}
