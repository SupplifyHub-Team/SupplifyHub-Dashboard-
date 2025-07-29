import { getPendingUsers } from "@/services/userManagementService";
import { useQuery } from "@tanstack/react-query";

export default function useGetPendingUsers() {
  return useQuery<IApiResponse<IPendingUser[]>, IErrorResponse>({
    queryKey: ["pendingUsers"],
    queryFn: getPendingUsers,
  });
}
