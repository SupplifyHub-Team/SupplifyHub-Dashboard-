import { activeUser } from "@/services/userManagementService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import useTableQueries from "../useTableQueries";
import { USERS_TABLE_NAME } from "@/lib/constants";
export default function useActivationUser() {
  const queryClient = useQueryClient();
  const queryParams = useTableQueries(USERS_TABLE_NAME);

  return useMutation({
    mutationFn: activeUser,
    onSuccess: () => {
      toast.success("تم تفعيل المستخدم بنجاح");

      queryClient.invalidateQueries({
        queryKey: [USERS_TABLE_NAME, JSON.stringify(queryParams)],
      });
    },
    onError: (error: Error) => {
      console.error("Error accept user:", error.message);
      toast.error("حدث خطاء حاول مرة اخرى");
    },
  });
}
