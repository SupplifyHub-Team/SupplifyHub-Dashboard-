import { deletePlan } from "@/services/plansServices";
import useOptimisticDelete from "../useOptimisticDelete";

export default function useDeletePlan() {
  return useOptimisticDelete<IPlan, string>({
    deleteFn: deletePlan,
    queryKey: ["plans"],
    matcher: (item, id) => item.id === Number(id),
    messages: {
      success: "تم حذف الخطة بنجاح",
      error: "حدث خطأ أثناء حذف الخطة",
    },
  });
}
