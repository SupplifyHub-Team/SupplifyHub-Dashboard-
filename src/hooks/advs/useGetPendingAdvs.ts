import { getPendingAdvs } from "@/services/AdvsServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetPendingAdvs() {
  return useQuery<IApiResponse<IPendingAdv[]>, IErrorResponse>({
    queryKey: ["pendingAdvs"],
    queryFn: getPendingAdvs,
  });
}
