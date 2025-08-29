import { patchPendingUsers } from "@/services/userManagementService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useAcceptPendingUsers() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchPendingUsers,
    onSuccess: () => {
      toast.success("تم قبول الستخدم بنجاح");
      queryClient.invalidateQueries({ queryKey: ["pendingUsers"] });
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["userStatistics"] });
    },

    onError: (error: Error) => {
      console.error("Error accept user:", error.message);

      toast.error("حدث خطاء حاول مرة اخرى");
    },
  });
}
