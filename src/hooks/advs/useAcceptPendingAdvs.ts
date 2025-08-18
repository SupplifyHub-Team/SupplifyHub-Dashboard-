import { patchAcceptAdv } from "@/services/AdvsServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useAcceptPendingAdvs() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchAcceptAdv,
    onSuccess: () => {
      toast.success("تم قبول الإعلان بنجاح");
      queryClient.invalidateQueries({ queryKey: ["activeAdvs"] });

      queryClient.invalidateQueries({ queryKey: ["pendingAdvs"] });
    },

    onError: (error: Error) => {
      console.error("Error accept advertisement:", error.message);
      toast.error("حدث خطأ حاول مرة أخرى");
    },
  });
}
