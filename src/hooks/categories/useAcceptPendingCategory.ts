import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { patchPendingCategory } from "@/services/categoriesServices";

export default function useAcceptPendingCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchPendingCategory,
    onSuccess: () => {
      toast.success("تم قبول الفئة بنجاح");
      queryClient.invalidateQueries({ queryKey: ["pendingCategories"] });

      queryClient.invalidateQueries({ queryKey: ["activeCategories"] });
    },

    onError: (error: Error) => {
      console.error("Error accept category:", error.message);

      toast.error("حدث خطاء حاول مرة اخرى");
    },
  });
}
