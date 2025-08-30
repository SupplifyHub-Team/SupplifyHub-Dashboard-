import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { DefaultValues, useForm, UseFormReturn } from "react-hook-form";
import { ZodSchema } from "zod";
import  useDebounce  from "@/hooks/useDebounce";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";

interface UseFilterFormOptions<T extends Record<string, any>> {
  schema: ZodSchema<T>;
  defaultValues: T;
  namespace: string;
  debounceMs?: number;
}

export function useFilterForm<T extends Record<string, any>>({
  schema,
  defaultValues,
  namespace,
  debounceMs = 400,
}: UseFilterFormOptions<T>): {
  form: UseFormReturn<T>;
  resetFilters: () => void;
} {
  const [searchParams, setSearchParams] = useSearchParams();

  const parsedValues = useMemo<DefaultValues<T>>(() => {
    const data: Record<string, any> = {};
    for (const [key, value] of searchParams.entries()) {
      if (key.startsWith(`${namespace}-`)) {
        data[key.replace(`${namespace}-`, "")] = value;
      }
    }
    const merged = { ...defaultValues, ...data };
    const parsed = schema.safeParse(merged);
    return (parsed.success ? parsed.data : defaultValues) as DefaultValues<T>;
  }, [searchParams]);

  const form = useForm<T>({
    resolver: standardSchemaResolver(schema),
    defaultValues: parsedValues,
  });

  const watched = form.watch();
  const debounced = useDebounce(watched, debounceMs);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    let filtersChanged = false;

    for (const [key, val] of Object.entries(debounced)) {
      const paramKey = `${namespace}-${key}`;
      const prev = searchParams.get(paramKey) || "";

      if ((val ?? "") !== prev) {
        filtersChanged = true;
      }

      if (val !== undefined && val !== "") {
        newParams.set(paramKey, val);
      } else {
        newParams.delete(paramKey);
      }
    }

    if (filtersChanged) {
      newParams.set(`${namespace}-page`, "1");
    }

    setSearchParams(newParams, { replace: true });
  }, [debounced]);

  const resetFilters = () => {
    const newParams = new URLSearchParams(searchParams);
    Object.keys(defaultValues).forEach((key) =>
      newParams.delete(`${namespace}-${key}`)
    );
    newParams.set(`${namespace}-page`, "1");
    setSearchParams(newParams, { replace: true });
    form.reset(defaultValues);
  };

  return { form, resetFilters };
}
