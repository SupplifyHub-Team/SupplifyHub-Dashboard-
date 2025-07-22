import { postCategory } from "@/services/categoriesServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import useTableQueries from "../useTableQueries";

export default function usePostCategory() {
  const queryClient = useQueryClient();
  const queryParams = useTableQueries("activeCategories");

  return useMutation({
    mutationFn: postCategory,
    onSuccess: () => {
      toast.success(`تم إضافة الفئة بنجاح`);
      queryClient.invalidateQueries({
        queryKey: ["activeCategories", JSON.stringify(queryParams)],
      });
    },
    onError: (error) => {
      toast.error(`${error.message || "حدث خطأ حاول مرة أخرى"}`);
    },
  });
}
