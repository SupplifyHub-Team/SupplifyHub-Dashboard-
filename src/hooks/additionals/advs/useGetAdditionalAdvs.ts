import usePaginatedData from "@/hooks/usePaginatedData";
import useTableQueries from "@/hooks/useTableQueries";
import { ADDITIONAL_ADVS_TABLE, TABLE_ROWS } from "@/lib/constants";
import { getAdditionalAdvs } from "@/services/AdvsServices";

export default function useGetAdditionalAdvs() {
  const queryParams = useTableQueries(ADDITIONAL_ADVS_TABLE);

  return usePaginatedData<IProduct>({
    queryKey: [ADDITIONAL_ADVS_TABLE, JSON.stringify(queryParams)],

    fetchFn: async () =>
      getAdditionalAdvs({
        ...queryParams,
        pageSize: TABLE_ROWS,
      }),
  });
}
