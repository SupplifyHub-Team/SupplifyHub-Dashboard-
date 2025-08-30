import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { queryClient } from "./react-query/queryClient";
import useAuth from "@/store/authStore";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSearchHistory(key: string): string[] {
  const raw = localStorage.getItem(`${key}-history`);
  return raw ? JSON.parse(raw) : [];
}

/** * Sets a cookie with the specified name, value, and expiration time in minutes.
 * @param name - The name of the cookie.
 * @param value - The value of the cookie.
 * @param minutes - The expiration time in minutes (default is 15 minutes).
 */
export function setCookie(name: string, value: string, minutes = 15) {
  const expires = new Date(Date.now() + minutes * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

/** * Removes a cookie by setting its expiration date to a past date.
 * @param name - The name of the cookie to remove.
 */
export function removeCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

/** * Retrieves the value of a cookie by its name.
 * @param name - The name of the cookie to retrieve.
 * @returns The value of the cookie, or null if not found.
 */
export function getCookie(name: string) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return decodeURIComponent(value);
  }
  return null;
}

export function clearState() {
  queryClient.clear();
  useAuth.getState().logout();
}
