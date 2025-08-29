import { ADDITIONAL_ORDERS_TABLE } from "@/lib/constants";
import { patchAdditionalOrders } from "@/services/ordersManagementService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
export default function usePatchAdditionalOrders() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      requestId,
      operationType,
    }: {
      requestId: string;
      operationType: "Cancel" | "Accept";
    }) => patchAdditionalOrders(requestId, operationType),

    onSuccess: (_data, variables) => {
      const actionText =
        variables.operationType === "Accept" ? "قبول" : "إلغاء";
      toast.success(` تم ${actionText} الطلب بنجاح`);
      queryClient.invalidateQueries({ queryKey: [ADDITIONAL_ORDERS_TABLE] });
    },

    onError: (error: Error) => {
      console.error("Error accept order:", error.message);
      toast.error("حدث خطاء حاول مرة اخرى");
    },
  });
}
