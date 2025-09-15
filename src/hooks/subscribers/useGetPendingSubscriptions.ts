import { getPendingsubscriptions } from "@/services/subscribersServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetPendingSubscriptions() {
  return useQuery<IApiResponse<IPendingSubscriptions[]>, IErrorResponse>({
    queryKey: ["pendingSubscriptions"],
    queryFn: getPendingsubscriptions,
  });
}
