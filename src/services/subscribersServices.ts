import api from "@/lib/axios";
import { isAxiosError } from "axios";

export async function getAllSubscribedSuppliers(
  filters: ISubscribedSuppliersFilters
) {
  try {
    const response = await api.get<IPaginatedResponse<ISubscribedSuppliers>>(
      `/api/subscribed-suppliers`,
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
