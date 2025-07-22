import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { deletePendingCategory } from "@/services/categoriesServices";

export default function useRejectPendingCategory() {
  return useMutation({
    mutationFn: deletePendingCategory,
    onSuccess: () => {
      toast.success("تم رفض الفئة بنجاح");
    },
    onError: (error: Error) => {
      console.error("Error deleting plan:", error.message);

      toast.error("حدث خطاء حاول مرة اخرى");
    },
  });
}
