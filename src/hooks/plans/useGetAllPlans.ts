import { getPlans } from "@/services/plansServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetAllPlans() {
  return useQuery<IApiResponse<IPlan[]>, IErrorResponse>({
    queryKey: ["plans"],
    queryFn: getPlans,
  });
}
