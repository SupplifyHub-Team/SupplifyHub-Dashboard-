import api from "@/lib/axios";
import { isAxiosError } from "axios";
// funcation to get all products

interface IProductsFilters {
  page?: number;
  pageSize: number;
}

export async function getProducts(filters: IProductsFilters) {
  try {
    const response = await api.get<IPaginatedResponse<IProduct>>(
      `/admin/product-request`,
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

// funcation to accept or cancel product request
export async function patchProduct(requestId: string, operationType: string) {
  try {
    const res = await api.patch(
      `/admin/accept-cancel-product-request?requestId=${requestId}&operationType=${operationType}`
    );
    return res?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "Failed to accept product"
      );
    }
    throw error;
  }
}
