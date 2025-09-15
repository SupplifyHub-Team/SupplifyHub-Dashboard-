import api from "@/lib/axios";
import { handleApiError } from "@/utils/handleApiError";

export async function getUserStatistics() {
  try {
    const response = await api.get<IApiResponse<IUserStatistics[]>>(
      `/admin/Statistics/users`
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

// general statistics service
export async function getStatsData<T>(
  endpoint: string
): Promise<IApiResponse<T[]>> {
  try {
    const response = await api.get<IApiResponse<T[]>>(
      `/admin/statistics/${endpoint}`
    );
    return response?.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
export async function getOrdersStatistics(year: number | string) {
  try {
    const response = await api.get<IApiResponse<IOrderStatistic[]>>(
      `/admin/Statistics/orders/${year}`
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
