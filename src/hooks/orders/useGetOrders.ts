import { getOrders } from "@/services/ordersManagementService";
import { ORDERS_TABLE_NAME } from "@/lib/constants";
import { IGetOrdersFilters } from "@/services/ordersManagementService";
import { usePaginatedQuery } from "../usePaginatedTable";
import useTableQueriesV2 from "../useTableQueriesV2";

export default function useGetOrders() {
  const filters = useTableQueriesV2(ORDERS_TABLE_NAME);

  return usePaginatedQuery<IOrder, IGetOrdersFilters>({
    queryFn: () => getOrders(filters.filters),
    tableName: ORDERS_TABLE_NAME,
    queryKey: [ORDERS_TABLE_NAME],
  });
}
