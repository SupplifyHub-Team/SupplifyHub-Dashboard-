import { getActiveAdvs } from "@/services/AdvsServices";
import usePaginatedData from "../usePaginatedData";
import useTableQueries from "../useTableQueries";
import { TABLE_ROWS } from "@/lib/constants";

export default function useGetActiveAdvs() {
  const queryParams = useTableQueries("activeAdvs");

  const apiFilters: IActiveAdvsFilters = {
    ...queryParams,
    pageSize: TABLE_ROWS,
  };

  return usePaginatedData<IActiveAdv>({
    queryKey: ["activeAdvs", JSON.stringify(apiFilters)],
    fetchFn: async () => getActiveAdvs(apiFilters),
  });
}
