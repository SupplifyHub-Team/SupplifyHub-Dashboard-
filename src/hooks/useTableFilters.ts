import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "@/hooks/useDebounce";

interface UseTableFiltersProps {
  schema: any;
  defaultValues: any;
  tableName: string;
  debounceMs?: number;
}

export function useTableFilters({
  schema,
  defaultValues,
  tableName,
  debounceMs = 500,
}: UseTableFiltersProps) {
  const [, setSearchParams] = useSearchParams();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const watchedValues = form.watch();
  const debouncedFilters = useDebounce(watchedValues, debounceMs);

  useEffect(() => {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(debouncedFilters)) {
      if (value !== undefined && value !== "") {
        params.set(`${tableName}-${key}`, String(value));
      } else {
        params.delete(`${tableName}-${key}`);
      }
    }

    params.set(`page-${tableName}`, "1");
    setSearchParams(params, { replace: true });
  }, [debouncedFilters, tableName, setSearchParams]);

  const resetFilters = () => {
    form.reset(defaultValues);
  };

  return {
    form,
    resetFilters,
  };
}
