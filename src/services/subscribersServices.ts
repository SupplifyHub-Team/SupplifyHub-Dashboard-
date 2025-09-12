import api from "@/lib/axios";
import { handleApiError } from "@/utils/handleApiError";
import { isAxiosError } from "axios";

export async function getAllSubscribedSuppliers(
  filters: ISubscribedSuppliersFilters
) {
  try {
    const response = await api.get<IPaginatedResponse<ISubscribedSuppliers>>(
      `/admin/subscribed-suppliers`,
      {
        params: filters,
      }
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

// funcation to get the pending subscribers
export async function getPendingsubscriptions() {
  try {
    const response = await api.get(`/admin/subscriptions-to-accept`);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

// funcation to accept the subscriptions

export async function acceptSubscription(supplierId: number, planId: number) {
  try {
    const response = await api.patch(
      `/admin/subscriptions/${supplierId}/${planId}`
    );
    return response?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorResponse: IErrorResponse = error.response?.data;
      throw new Error(errorResponse.data.message);
    }
    console.error("An unexpected error occurred:", error);
    throw error;
  }
}

// funcation to reject the subscriptions
export async function rejectSubscription(supplierId: number, planId: number) {
  try {
    const response = await api.delete(
      `/admin/subscriptions/${supplierId}/${planId}`
    );
    return response?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorResponse: IErrorResponse = error.response?.data;
      throw new Error(errorResponse.data.message);
    }
    console.error("An unexpected error occurred:", error);
    throw error;
  }
}
