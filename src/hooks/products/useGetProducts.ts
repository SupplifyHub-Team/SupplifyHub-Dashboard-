import usePaginatedData from "../usePaginatedData";
import useTableQueries from "../useTableQueries";
import { TABLE_ROWS } from "@/lib/constants";
import { getProducts } from "@/services/productsServices";

export default function useGetProducts() {
  const queryParams = useTableQueries("products");

  return usePaginatedData<IProduct>({
    queryKey: ["products", JSON.stringify(queryParams)],

    fetchFn: async () =>
      getProducts({
        ...queryParams,
        pageSize: TABLE_ROWS,
      }),
  });
}
