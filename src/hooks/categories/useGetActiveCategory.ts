import { getActiveCategories } from "@/services/categoriesServices";
import usePaginatedData from "../usePaginatedData";
import useTableQueries from "../useTableQueries";
import { TABLE_ROWS } from "@/lib/constants";

export default function useGetActiveCategory() {
  const queryParams = useTableQueries("activeCategories");

  return usePaginatedData<IActiveCategory>({
    queryKey: ["activeCategories", JSON.stringify(queryParams)],

    fetchFn: async () =>
      getActiveCategories({
        ...queryParams,
        pageSize: TABLE_ROWS.toString(),
      }),
  });
}
