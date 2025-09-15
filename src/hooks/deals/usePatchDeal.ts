import { patchDeal } from "@/services/dealsServices";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
export default function usePatchDeal() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      dealId,
      operationType,
    }: {
      dealId: string;
      operationType: "Cancel" | "Accept";
    }) => patchDeal(dealId, operationType),

    onSuccess: (_data, variables) => {
      const actionText =
        variables.operationType === "Accept" ? "قبول" : "رفض";
      toast.success(` تم ${actionText} الصفقة بنجاح`);

      queryClient.invalidateQueries({ queryKey: ["dealsConfirm"] });
    },

    onError: (error: Error) => {
      console.error("Error accept deal:", error.message);
      toast.error("حدث خطاء حاول مرة اخرى");
    },
  });
}
