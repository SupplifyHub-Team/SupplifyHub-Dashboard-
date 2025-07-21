import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import useTableQueries from "./useTableQueriesV2";

type QueryFn<T, F extends Record<string, any>> = (
  filters: F & { page: number; pageSize: number }
) => Promise<IPaginatedResponse<T>>;

export function usePaginatedQuery<
  T,
  F extends Record<string, any> = Record<string, string>
>({
  tableName,
  queryKey,
  queryFn,
}: {
  tableName: string;
  queryKey: string;
  queryFn: QueryFn<T, F>;
}) {
  const queryClient = useQueryClient();
  const { page, filters } = useTableQueries(tableName);

  const mergedFilters = {
    ...filters,
    page,
  } as F & { page: number; pageSize: number };

  const query = useQuery({
    queryKey: [queryKey, page, filters],
    queryFn: () => queryFn(mergedFilters),
  });

  const meta = query.data?.meta;
  const hasNextPage = meta ? meta.currentPage < meta.totalPages : false;
  const hasPrevPage = meta ? meta.currentPage > 1 : false;

  useEffect(() => {
    if (hasNextPage) {
      const nextFilters = { ...mergedFilters, page: page + 1 };
      queryClient.prefetchQuery({
        queryKey: [queryKey, page + 1, filters],
        queryFn: () => queryFn(nextFilters),
      });
    }
    if (hasPrevPage) {
      const prevFilters = { ...mergedFilters, page: page - 1 };
      queryClient.prefetchQuery({
        queryKey: [queryKey, page - 1, filters],
        queryFn: () => queryFn(prevFilters),
      });
    }
  }, [page, filters]);

  return query;
}
