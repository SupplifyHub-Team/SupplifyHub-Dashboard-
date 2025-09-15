import { useQuery } from "@tanstack/react-query";

type UsePaginatedDataProps<T> = {
  queryKey: unknown[];
  fetchFn: () => Promise<IPaginatedResponse<T>>;
  refetchInterval?: number;
  enabled?: boolean;
};

function usePaginatedData<T>({
  queryKey,
  fetchFn,
  refetchInterval,
  enabled = true,
}: UsePaginatedDataProps<T>) {
  const result = useQuery({
    queryKey,
    queryFn: fetchFn,
    refetchInterval,
    enabled,
  });

  return result;
}

export default usePaginatedData;
