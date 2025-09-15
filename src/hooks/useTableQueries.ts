import { useSearchParams } from "react-router";

export default function useTableQueries(name: string) {
  const [searchParams] = useSearchParams();

  const result: Record<string, string> = {};

  const pageParamNameInUrl = `page-${name.toLowerCase()}`;
  result.page = searchParams.get(pageParamNameInUrl) || "1";

  for (const [key, value] of searchParams.entries()) {
    if (key.startsWith(`${name}-`)) {
      const newKey = key.replace(`${name}-`, "");
      result[newKey] = value;
    }
  }

  return result;
}
