import { deletePendingAdv } from "@/services/AdvsServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useRejectPendingAdvs() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePendingAdv,
    onSuccess: () => {
      toast.success("تم رفض الاعلان بنجاح");

      queryClient.invalidateQueries({ queryKey: ["pendingAdvs"] });
    },

    onError: (error: Error) => {
      console.error("Error reject Advs:", error.message);

      toast.error("حدث خطاء حاول مرة اخرى");
    },
  });
}
