import { getOrders } from "@/services/ordersManagementService";
import usePaginatedData from "../usePaginatedData";
import useTableQueries from "../useTableQueries";
import { TABLE_ROWS } from "@/lib/constants";
import { IGetOrdersFilters } from "@/services/ordersManagementService";

export default function useGetOrders() {
  const queryParams = useTableQueries("orders");

  const apiFilters: IGetOrdersFilters = {
    ...queryParams,
    pageSize: TABLE_ROWS,
  };

  return usePaginatedData<IOrder>({
    queryKey: ["orders", JSON.stringify(apiFilters)],
    fetchFn: async () => getOrders(apiFilters),
  });
}
