import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteActiveAdv } from "@/services/AdvsServices";
export default function useDeleteActiveAdvs() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteActiveAdv,
    onSuccess: () => {
      toast.success("تم حذف الاعلان بنجاح");
      queryClient.invalidateQueries({ queryKey: ["activeAdvs"] });
    },
    onError: (error: Error) => {
      console.error("Error reject Advs:", error.message);
      toast.error("حدث خطاء حاول مرة اخرى");
    },
  });
}
