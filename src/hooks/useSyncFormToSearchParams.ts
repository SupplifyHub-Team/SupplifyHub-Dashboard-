import { useSearchParams } from "react-router";
import { useEffect } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export function useSyncFormToSearchParams<T extends FieldValues>(
  form: UseFormReturn<T>
) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let subscription: { unsubscribe: () => void };

    // async function syncFormWithSearchParams() {
    //   const keys = Object.keys(form.getValues());
    //   const defaultValues = {};

    //   keys.forEach((key) => {
    //     const value = searchParams.get(key);
    //     if (value !== null) {
    //       defaultValues[key] = value;
    //     }
    //     console.log(defaultValues);
    //   });
    //   form.reset({
    //     ...defaultValues,
    //   });
    // }

    async function syncFormValues() {
      subscription = form.watch((vals) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());

        for (const key in vals) {
          const value = vals[key];
          if (value) {
            newSearchParams.set(key, value);
          } else {
            newSearchParams.delete(key);
          }
        }

        setSearchParams(newSearchParams, { replace: true });
      });
    }

    (async function () {
      //   await syncFormWithSearchParams();
      await syncFormValues();
    })();

    return () => subscription?.unsubscribe(); // clean up on unmount
  }, []);
}
