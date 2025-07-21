import { useSearchParams } from "react-router-dom";

export default function useTableQueriesV2(tableName: string) {
  const [searchParams] = useSearchParams();

  const filters: Record<string, string> = {};

  const page = Number(searchParams.get(`page-${tableName}`) || "1");

  for (const [key, value] of searchParams.entries()) {
    if (key.startsWith(`${tableName}-`)) {
      const filterKey = key.replace(`${tableName}-`, "");
      filters[filterKey] = value;
    }
  }

  return {
    page,
    filters,
  };
}
