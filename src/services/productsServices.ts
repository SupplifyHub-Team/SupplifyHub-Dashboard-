import api from "@/lib/axios";
import { handleApiError } from "@/utils/handleApiError";

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
    throw handleApiError(error);
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
    throw handleApiError(error);
  }
}
