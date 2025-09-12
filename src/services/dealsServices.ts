import { handleApiError } from "@/utils/handleApiError";
import api from "../lib/axios";

export async function getDealsConfirm() {
  try {
    const response = await api.get<IDealsResponse>("/admin/deals-confirm");
    return response.data.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function patchDeal(dealId: string, operationType: string) {
  try {
    const res = await api.patch(
      `/admin/accept-cancel-deal-request?dealId=${dealId}&operationType=${operationType}`
    );
    return res?.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
