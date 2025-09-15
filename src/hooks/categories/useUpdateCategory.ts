import { updateCategory } from "@/services/categoriesServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface UpdateCategoryVariables {
  data: FormData;
}

export default function useUpdateCategory() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, UpdateCategoryVariables>({
    mutationFn: async ({ data }) => {
      await updateCategory(data);
    },
    onSuccess: () => {
      toast.success("تم تحديث الفئة بنجاح");
      queryClient.invalidateQueries({
        queryKey: ["activeCategories"],
      });
    },
    onError: (error: Error) => {
      console.error("Error updating category:", error.message);
      toast.error("حدث خطأ حاول مرة أخرى");
    },
  });
}
