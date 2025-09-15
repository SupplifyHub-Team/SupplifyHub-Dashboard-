import { deletePendingUsers } from "@/services/userManagementService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useRejectPendingUsers() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePendingUsers,
    onSuccess: () => {
      toast.success("تم رفض المستخدم بنجاح");

      queryClient.invalidateQueries({ queryKey: ["pendingUsers"] });
    },

    onError: (error: Error) => {
      console.error("Error reject user:", error.message);

      toast.error("حدث خطاء حاول مرة اخرى");
    },
  });
}
