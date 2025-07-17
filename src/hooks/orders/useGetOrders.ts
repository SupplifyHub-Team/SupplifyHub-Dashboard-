import { getOrders } from "@/services/ordersManagementService";
import usePaginatedData from "../usePaginatedData";
import useTableQueries from "../useTableQueries";
import { TABLE_ROWS } from "@/lib/constants";
export default function useGetOrders() {
  const queryParams = useTableQueries("orders");

  return usePaginatedData<IOrder>({
    queryKey: ["orders", JSON.stringify(queryParams)],

    fetchFn: async () =>
      getOrders({
        ...queryParams,
        pageSize: TABLE_ROWS.toString(),
      }),
  });
}
