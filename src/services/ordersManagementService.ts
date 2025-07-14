import api from "@/lib/axios";
import { isAxiosError } from "axios";

export async function getOrders() {
  try {
    const response = await api.get<IPaginatedResponse<IOrder>>("/orders");

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.message || "Failed to fetch orders");
    }
    throw new Error("An unexpected error occurred while fetching orders");
  }
}