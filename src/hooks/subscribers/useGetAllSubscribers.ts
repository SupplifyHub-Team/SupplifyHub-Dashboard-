import useTableQueries from "../useTableQueries";
import { usePaginatedTable } from "../usePaginatedTable";
import { getAllSubscribedSuppliers } from "@/services/subscribersServices";

export default function useGetAllSubscribers() {
  const result = useTableQueries("subscribedSuppliers");
  return usePaginatedTable<ISubscribedSuppliers>({
    tableName: "subscribedSuppliers",
    queryKey: "subscribedSuppliers",
    queryFn: () => getAllSubscribedSuppliers(result),
  });
}
