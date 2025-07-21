import { getPlansStatistics } from "@/services/plansServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetPlansStatistics() {
  return useQuery({
    queryKey: ["plansStatistics"],
    queryFn: getPlansStatistics,
    refetchOnWindowFocus: false,
    retry: 1,
    staleTime: 1000 * 60 * 5,
  });
}
