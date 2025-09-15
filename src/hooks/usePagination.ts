import { useSearchParams } from "react-router";

export function usePagination(table: string): [number, (page: number) => void] {
  const [params, setParams] = useSearchParams();
  const param = `${table}-page`;
  const page = Number(params.get(param)) || 1;

  const setPage = (next: number) => {
    const updated = new URLSearchParams(params);
    updated.set(param, String(next));
    setParams(updated, { replace: true });
  };

  return [page, setPage];
}
