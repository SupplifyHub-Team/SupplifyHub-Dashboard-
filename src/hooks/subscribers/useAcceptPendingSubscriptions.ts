import { SUBSCRIBED_SUPPLIERS_TABLE_NAME } from "@/lib/constants";
import { acceptSubscription } from "@/services/subscribersServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useAcceptPendingSubscriptions() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      supplierId,
      planId,
    }: {
      supplierId: number;
      planId: number;
    }) => acceptSubscription(supplierId, planId),
    onSuccess: () => {
      toast.success("تم قبول الاشتراك بنجاح");
      queryClient.invalidateQueries({
        queryKey: [SUBSCRIBED_SUPPLIERS_TABLE_NAME],
      });
    },

    onError: (error: Error) => {
      console.error("Error accept advertisement:", error.message);
      toast.error("حدث خطأ حاول مرة أخرى");
    },
  });
}
