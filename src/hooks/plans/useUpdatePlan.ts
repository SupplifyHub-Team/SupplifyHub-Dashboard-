import useOptimisticUpdate from "../useOptimisticUpdate";
import { pricingPlanSchema } from "@/schemas/pricingPlanSchema";
import { updatePlan } from "@/services/plansServices";

export type inputPlanType = pricingPlanSchema & { id: string | number };

export default function useUpdatePlan() {
  return useOptimisticUpdate<IApiResponse<IPlan>, inputPlanType>({
    updateFn: (data: inputPlanType) => updatePlan(data, data.id),
    queryKey: ["plans"],
    matcher: (item, input) => item.data.id === input.id,
    updater: (item, input) => ({
      ...item,
      ...input,
    }),
    messages: {
      success: "تم تحديث الخطة بنجاح",
      error: "حدث خطأ أثناء تحديث الخطة",
    },
  });
}
