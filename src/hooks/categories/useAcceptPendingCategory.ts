import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { patchPendingCategory } from "@/services/categoriesServices";

export default function useAcceptPendingCategory() {
    return useMutation({
        mutationFn: patchPendingCategory,
        onSuccess: () => {
            toast.success("تم قبول القسم بنجاح");
        },
        onError: () => {
            toast.error("حدث خطاء حاول مرة اخرى");
        },
    });
}