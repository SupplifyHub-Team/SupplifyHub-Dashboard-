import usePaginatedData from "@/hooks/usePaginatedData";
import useTableQueries from "@/hooks/useTableQueries";
import { ADDITIONAL_ORDERS_TABLE, TABLE_ROWS } from "@/lib/constants";
import { getAdditionalOrders } from "@/services/ordersManagementService";

export default function useGetAdditionalOrders() {
  const queryParams = useTableQueries(ADDITIONAL_ORDERS_TABLE);

  return usePaginatedData<IAdditionalOrders>({
    queryKey: [ADDITIONAL_ORDERS_TABLE, JSON.stringify(queryParams)],

    fetchFn: async () =>
      getAdditionalOrders({
        ...queryParams,
        pageSize: TABLE_ROWS,
      }),
  });
}
