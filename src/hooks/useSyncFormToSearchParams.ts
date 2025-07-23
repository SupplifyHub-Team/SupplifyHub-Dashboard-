import { useSearchParams } from "react-router";
import { useEffect } from "react";
import { FieldValues, UseFormReturn, DefaultValues } from "react-hook-form";

export function useSyncFormToSearchParams<T extends FieldValues>(
  form: UseFormReturn<T>,
  tableName: string
) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let subscription: { unsubscribe: () => void };

    const initializeFormFromSearchParams = () => {
    
      const initialFormValues: DefaultValues<T> = {} as DefaultValues<T>; 
      
      for (const [key, value] of searchParams.entries()) {
        if (key.startsWith(`${tableName}-`)) {
          const originalKey = key.replace(`${tableName}-`, "");
          
         
          (initialFormValues as { [key: string]: unknown })[originalKey] = value;
        }
      }
      form.reset(initialFormValues);
    };

    const syncFormValuesToSearchParams = () => {
      subscription = form.watch((vals) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());

        for (const key in vals) {
          const value = vals[key];
          const paramKey = `${tableName}-${key}`;

         
          if (value !== undefined && value !== null && value !== '') { 
            newSearchParams.set(paramKey, value.toString());
          } else {
            newSearchParams.delete(paramKey);
          }
        }

        setSearchParams(newSearchParams, { replace: true });
      });
    };

    initializeFormFromSearchParams();
    syncFormValuesToSearchParams();

    return () => subscription?.unsubscribe();
  }, [form, searchParams, setSearchParams, tableName]);
}