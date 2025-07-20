import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function usePaginatedQuery<T>({
  tableName,
  queryKey,
  queryFn,
}: {
  tableName: string;
  queryKey: unknown;
  queryFn: () => Promise<IPaginatedResponse<T>>;
}) {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const pageParam = `${tableName}-page`;
  const searchParam = `${tableName}-search`;

  const currentPage = Number(searchParams.get(pageParam) || 1);
  const search = searchParams.get(searchParam) || undefined;

  const res = useQuery({
    queryKey: [queryKey],
    queryFn,
  });

  const meta = res.data;
  const hasNextPage = meta ? meta.currentPage < meta.totalPages : false;
  const hasPrevPage = meta ? meta.currentPage > 1 : false;

  useEffect(() => {
    if (hasNextPage) {
      queryClient.prefetchQuery({
        queryKey: [queryKey, currentPage + 1],
        queryFn,
      });
    }
    if (hasPrevPage) {
      queryClient.prefetchQuery({
        queryKey,
        queryFn,
      });
    }
  }, [
    currentPage,
    search,
    hasNextPage,
    hasPrevPage,
    queryClient,
    queryFn,
    queryKey,
  ]);

  return res;
}
