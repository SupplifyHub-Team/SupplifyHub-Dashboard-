import { getGeneralStatistics } from "@/services/statisticsServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetGeneralStatistics() {
  return useQuery({
    queryKey: ["generalStatistics"],
    queryFn: getGeneralStatistics,
    refetchOnWindowFocus: false,
    retry: 1,
    staleTime: 1000 * 60 * 5,
  });
}
