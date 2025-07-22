import { getStatsData } from "@/services/statisticsServices";
import { useQuery } from "@tanstack/react-query";


export default function useGetStats<T>(queryKeyBase: string, endpoint: string) {
  return useQuery({
    queryKey: [`${queryKeyBase}-stats`],
    queryFn: () => getStatsData<T>(endpoint),
    refetchOnWindowFocus: false,
    retry: 1,
    staleTime: 1000 * 60 * 5,
  });
}
