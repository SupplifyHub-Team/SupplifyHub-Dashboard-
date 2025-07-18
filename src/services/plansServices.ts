import api from "@/lib/axios";
import { isAxiosError } from "axios";

export async function getPlans() {
  try {
    const response = await api.get<IApiResponse<IPlan[]>>("/api/plans");
    return response?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "حدث خطأ ما حاول مرة أخرى "
      );
    }
    throw error;
  }
}
export async function deletePlan(planId: string) {
  try {
    const response = await api.delete(`/api/Plans/plan/${planId}`);
    return response?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "حدث خطأ ما حاول مرة أخرى "
      );
    }
    throw error;
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
      "/api/Plans/create-plan",
      planData
    );
    return response?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "حدث خطأ ما حاول مرة أخرى "
      );
    }
    throw error;
  }
}
