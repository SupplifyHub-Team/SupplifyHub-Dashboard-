import { deletePlan } from "@/services/plansServices";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeletePlan() {
  return useMutation({
    mutationFn: deletePlan,
    onError: (error: Error) => {
      console.error("Error deleting plan:", error.message);
      toast.error("حدث خطأ ما حاول مرة أخرى");
    },
    onSuccess: () => {
      toast.success("تم حذف الخطة بنجاح");
    },
  });
}
