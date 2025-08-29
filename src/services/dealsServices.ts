import api from "../lib/axios";
import { isAxiosError } from "axios";

export async function getDealsConfirm() {
  try {
    const response = await api.get<IDealsResponse>("/admin/deals-confirm");
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "حدث خطاء ما حاول مرة اخرى"
      );
    }
    throw error;
  }
}


export async function patchDeal(
  dealId: string,
  operationType: string
) {
  try {
    const res = await api.patch(
      `/admin/accept-cancel-deal-request?dealId=${dealId}&operationType=${operationType}`
    );
    return res?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.message || "Failed to accept adv");
    }
    throw error;
  }
}