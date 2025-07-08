import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getSearchHistory(key: string): string[] {
  const raw = localStorage.getItem(`${key}-history`);
  return raw ? JSON.parse(raw) : [];
}