import useTableQueries from "../useTableQueries";
import { usePaginatedQuery } from "../usePaginatedTable";
import { getAllSubscribedSuppliers } from "@/services/subscribersServices";

export default function useGetAllSubscribers() {
  const result = useTableQueries("subscribedSuppliers");
  return usePaginatedQuery<ISubscribedSuppliers>({
    tableName: "subscribedSuppliers",
    queryKey: "subscribedSuppliers",
    queryFn: () => getAllSubscribedSuppliers(result),
  });
}
