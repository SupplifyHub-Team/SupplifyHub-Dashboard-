import { getOrders } from "@/services/ordersManagementService";
import useInfinite from "../useInfinite";
import useTableQueries from "../useTableQueries";

export default function useGetOrders() {
    const result = useTableQueries("orders");

    return useInfinite<IOrder>({
        queryKey: ["orders", JSON.stringify(result)],

        fetchFn: async (pageParam) =>
            getOrders({
                ...result,
                Page: pageParam.toString(),
            }),
    });

}
