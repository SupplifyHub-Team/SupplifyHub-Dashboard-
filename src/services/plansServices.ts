import api from "@/lib/axios";
import { pricingPlanSchema } from "@/schemas/pricingPlanSchema";
import { handleApiError } from "@/utils/handleApiError";

export async function getPlansStatistics() {
  try {
    const response = await api.get<IApiResponse<IPlanStatistics[]>>(
      "/admin/Statistics/plans"
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
export async function getPlans() {
  try {
    const response = await api.get<IApiResponse<IPlan[]>>("/plans");
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
export async function deletePlan(planId: string | number) {
  try {
    const response = await api.delete(`/admin/plans/${planId}`);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function postPlan(planData: {
  price: number;
  description: string;
  duration: number;
  planName: string;
}) {
  try {
    const response = await api.post<IApiResponse<IPlan>>(
      "/admin/Plans/create-plan",
      planData
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function updatePlan(
  planData: pricingPlanSchema,
  id: string | number
) {
  try {
    const response = await api.put<IApiResponse<IPlan>>(
      `/admin/plans/${id}`,
      planData
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
