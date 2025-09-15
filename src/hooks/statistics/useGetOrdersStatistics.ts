import { getOrdersStatistics } from "@/services/statisticsServices";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export default function useGetOrdersStatistics() {
  const [searchParams] = useSearchParams();
  const year = Number(searchParams.get("orders-per-month-year")) || 2025;
  return useQuery({
    queryKey: ["ordersStatistics", year],
    queryFn: () => getOrdersStatistics(year),
    enabled: !!year,
    refetchOnWindowFocus: false,
    retry: 1,
    staleTime: 1000 * 60 * 5,
  });
}
