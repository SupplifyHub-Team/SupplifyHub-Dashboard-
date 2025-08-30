import { getAllSubscribedSuppliers } from "@/services/subscribersServices";
import { usePaginatedQuery } from "../usePaginatedTable";
import { SUBSCRIBED_SUPPLIERS_TABLE_NAME } from "@/lib/constants";
import useTableQueriesV2 from "../useTableQueriesV2";

export default function useGetAllSubscribers() {
  const filters = useTableQueriesV2(SUBSCRIBED_SUPPLIERS_TABLE_NAME);
  return usePaginatedQuery<ISubscribedSuppliers, ISubscribedSuppliersFilters>({
    tableName: SUBSCRIBED_SUPPLIERS_TABLE_NAME,
    queryKey: [SUBSCRIBED_SUPPLIERS_TABLE_NAME],
    queryFn: () => getAllSubscribedSuppliers(filters.filters),
  });
}
