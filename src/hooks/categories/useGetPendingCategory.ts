import { getPendingCategories } from "@/services/categoriesServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetPendingCategory() {
  return useQuery<IApiResponse<IPendingCategory[]>, IErrorResponse>({
    queryKey: ["plans"],
    queryFn: getPendingCategories,
  });
}
