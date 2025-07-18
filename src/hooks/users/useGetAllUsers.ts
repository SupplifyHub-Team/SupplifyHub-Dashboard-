import useInfinite from "../usePaginatedData";
import getAllUsers from "@/services/userManagementService";
import useTableQueries from "../useTableQueries";
import { TABLE_ROWS } from "@/lib/constants";

export default function useGetAllUsers() {
  const queryParams = useTableQueries("users");

  return useInfinite<IUser>({
    queryKey: ["users", JSON.stringify(queryParams)],

    fetchFn: async () =>
      getAllUsers({
        ...queryParams,
        pageSize: TABLE_ROWS.toString(),
      }),
  });
}
