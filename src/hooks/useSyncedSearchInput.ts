import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import useDebounce from "@/hooks/useDebounce";

export function useSyncedSearchInput(searchKey: string, delay = 500) {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialValue =
    searchParams.get(searchKey) || localStorage.getItem(searchKey) || "";

  const [inputValue, setInputValue] = useState(initialValue);
  const debouncedValue = useDebounce(inputValue, delay);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedValue.trim()) {
      params.set(searchKey, debouncedValue);
      localStorage.setItem(searchKey, debouncedValue);

      // Store in history
      const historyKey = `${searchKey}-history`;
      const raw = localStorage.getItem(historyKey);
      const old = raw ? JSON.parse(raw) : [];
      const updated = [
        debouncedValue,
        ...old.filter((t: string) => t !== debouncedValue),
      ];
      localStorage.setItem(historyKey, JSON.stringify(updated.slice(0, 10)));
    } else {
      params.delete(searchKey);
      localStorage.removeItem(searchKey);
    }

    setSearchParams(params);
  }, [debouncedValue, searchKey, searchParams, setSearchParams]);

  return {
    inputValue,
    setInputValue,
    debouncedValue,
  };
}
