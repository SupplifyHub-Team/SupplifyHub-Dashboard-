import { getPendingCategories } from "@/services/categoriesServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetPendingCategory() {
  return useQuery<IPaginatedResponse<IPendingCategory>, IErrorResponse>({
    queryKey: ["pendingCategories"],
    queryFn: getPendingCategories,
  });
}
