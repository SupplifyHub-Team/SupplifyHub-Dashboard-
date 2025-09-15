import { getUserStatistics } from "@/services/statisticsServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetUserStatistics() {
  return useQuery({
    queryKey: ["userStatistics"],
    queryFn: getUserStatistics,
    refetchOnWindowFocus: false,
    retry: 1,
    staleTime: 1000 * 60 * 5,
  });
}
