import api from "@/lib/axios";
import { isAxiosError } from "axios";

export async function getUserStatistics() {
  try {
    const response = await api.get<IApiResponse<IUserStatistics[]>>(
      `/admin/Statistics/users`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user statistics:", error);

    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "حدث خطأ ما حاول مرة أخرى "
      );
    }
    throw error;
  }
}

// general statistics service
export async function getStatsData<T>(
  endpoint: string
): Promise<IApiResponse<T[]>> {
  try {
    const response = await api.get<IApiResponse<T[]>>(`/admin/statistics/${endpoint}`);
    return response?.data;
  } catch (error) {
    console.error("Error fetching general statistics:", error);

    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "حدث خطأ ما حاول مرة أخرى "
      );
    }
    throw error;
  }
}
export async function getOrdersStatistics(year: number | string) {
  try {
    const response = await api.get<IApiResponse<IOrderStatistic[]>>(
      `/admin/Statistics/orders/${year}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching orders statistics:", error);

    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "حدث خطأ ما حاول مرة أخرى "
      );
    }
    throw error;
  }
}
