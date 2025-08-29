import usePaginatedData from "../usePaginatedData";
import getAllUsers from "@/services/userManagementService";
import useTableQueries from "../useTableQueries";
import { TABLE_ROWS, USERS_TABLE_NAME } from "@/lib/constants";

export default function useGetAllUsers() {
  const queryParams = useTableQueries(USERS_TABLE_NAME);

  return usePaginatedData<IUser>({
    queryKey: [USERS_TABLE_NAME, JSON.stringify(queryParams)],

    fetchFn: async () =>
      getAllUsers({
        ...queryParams,
        pageSize: TABLE_ROWS.toString(),
      }),
  });
}
