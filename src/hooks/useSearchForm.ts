"use client";

import { useEffect } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { debounce } from "@/lib/utils";
import { useNavigate, useSearchParams } from "react-router";

type UseFilterSyncOptions<T extends FieldValues> = {
  form: UseFormReturn<T>;
  baseKey?: string;
};

const isArrayField = (value: unknown) => Array.isArray(value);

export default function useSearchForm<T extends FieldValues>({
  form,
  baseKey,
}: UseFilterSyncOptions<T>) {
  const router = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const getParamKey = (key: string) => (baseKey ? `${baseKey}-${key}` : key);

  useEffect(() => {
    const formValues: Record<string, any> = {};
    const defaultValues = form.getValues();

    for (const key of Object.keys(defaultValues)) {
      const paramKey = getParamKey(key);
      const paramValue = searchParams.get(paramKey);

      if (paramValue !== null) {
        if (isArrayField(defaultValues[key])) {
          formValues[key] = paramValue.split(",").filter((v) => v.length > 0);
        } else {
          formValues[key] = paramValue;
        }
      }
    }

    if (Object.keys(formValues).length > 0) {
      form.reset({
        ...defaultValues,
        ...formValues,
      });
    }
  }, [searchParams, form, baseKey]);

  useEffect(() => {
    const updateParams = debounce(
      (values: Record<string, unknown>, name?: string) => {
        const params = new URLSearchParams(searchParams.toString());

        Object.entries(values).forEach(([k, v]) => {
          const paramKey = getParamKey(k);

          if (
            v !== undefined &&
            v !== null &&
            v !== "" &&
            (!Array.isArray(v) || v.length > 0)
          ) {
            params.set(paramKey, Array.isArray(v) ? v.join(",") : String(v));
          } else {
            params.delete(paramKey);
          }
        });

        // Reset page if a non-page filter changes
        const pageKey = getParamKey("page");
        if (name !== "page" && params.has(pageKey)) {
          params.set(pageKey, "1");
        }

        setSearchParams(params);
      },
      500
    );

    const subscription = form.watch((values, { name }) => {
      updateParams(values, name);
    });

    return () => subscription.unsubscribe();
  }, [form, searchParams, baseKey, setSearchParams]);
}
