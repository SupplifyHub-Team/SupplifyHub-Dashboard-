import { getDealsConfirm } from "@/services/dealsServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetDealsConfirm() {
  return useQuery<IDeal[], IErrorResponse>({
    queryKey: ["dealsConfirm"],
    queryFn: getDealsConfirm,
});
}
