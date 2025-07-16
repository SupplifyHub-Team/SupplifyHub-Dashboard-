
import useInfinite from "../useInfinite"; 
import getAllUsers from "@/services/userManagementService"; 
import useTableQueries from "../useTableQueries"; 

export default function useGetAllUsers() {
  const result = useTableQueries("users");

  return useInfinite<IUser>({
    
    queryKey: ["users", JSON.stringify(result)],

   
    fetchFn: async (pageParam) =>
      getAllUsers({
        ...result, 
        Page: pageParam.toString(), 
      }),
  });
}