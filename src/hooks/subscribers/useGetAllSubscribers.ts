import { getAllSubscribedSuppliers } from "@/services/subscribersServices";
import { usePaginatedQuery } from "../usePaginatedTable";
import { SUBSCRIBED_SUPPLIERS_TABLE_NAME } from "@/lib/constants";

export default function useGetAllSubscribers() {
  return usePaginatedQuery<ISubscribedSuppliers, ISubscribedSuppliersFilters>({
    tableName: SUBSCRIBED_SUPPLIERS_TABLE_NAME,
    queryKey: SUBSCRIBED_SUPPLIERS_TABLE_NAME,
    queryFn: getAllSubscribedSuppliers,
  });
}
