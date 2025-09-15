import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deletePendingCategory } from "@/services/categoriesServices";

export default function useRejectPendingCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePendingCategory,
    onSuccess: () => {
      toast.success("تم رفض الفئة بنجاح");

      queryClient.invalidateQueries({ queryKey: ["pendingCategories"] });
    },

    onError: (error: Error) => {
      console.error("Error reject category:", error.message);

      toast.error("حدث خطاء حاول مرة اخرى");
    },
  });
}
