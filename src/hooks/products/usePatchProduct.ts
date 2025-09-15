import { patchProduct } from "@/services/productsServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
// funcation to accept or cancel product request
export default function usePatchProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      requestId,
      operationType,
    }: {
      requestId: string;
      operationType: "Cancel" | "Accept";
    }) => patchProduct(requestId, operationType),

    onSuccess: (_data, variables) => {
      const actionText =
        variables.operationType === "Accept" ? "قبول" : "إلغاء";
      toast.success(` تم ${actionText} المنتج بنجاح`);
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },

    onError: (error: Error) => {
      console.error("Error accept product:", error.message);
      toast.error("حدث خطاء حاول مرة اخرى");
    },
  });
}
