import { useSearchParams } from "react-router";

export default function useTableQueries(name: string) {
  const [searchParams] = useSearchParams();

  const result: Record<string, string> = {};

  const pageParamNameInUrl = `page-${name.toLowerCase()}`; // page-{name};
  result.page = searchParams.get(pageParamNameInUrl) || "1";
  for (const [key, value] of searchParams.entries()) {
    if (key.startsWith(`${name}-`)) {
      const newQueryKey = key.replace(`${name}-`, "");
      result[newQueryKey] = value;
    }
  }

  return result;
}
