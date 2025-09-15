import { useMutation } from "@tanstack/react-query";
import { postEvent } from "@/services/AdvsServices";
import { toast } from "sonner";

export function useAddEvent() {
  return useMutation({
    mutationFn: postEvent,
    onSuccess: () => {
      toast.success("تمت إضافة الحدث بنجاح");

    },
    onError: () => {
      toast.error("حدث خطأ أثناء إضافة الحدث ");
    },
  });
}
