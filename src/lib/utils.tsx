import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { queryClient } from "./react-query/queryClient";
import useAuth from "@/store/authStore";
import { File, FileText, FileVideo, ImageIcon, Music } from "lucide-react";
import { FieldNamesMarkedBoolean, FieldValues } from "react-hook-form";

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

export const handleDownload = async (name: string) => {
  const response = await fetch(
    "https://res.cloudinary.com/dqvrzrpyc/raw/upload/v1756646545/tax_docs/b1a5fc77-4aaf-4c48-8a22-306d0fb35b4c.pdf"
  );
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${name}-document.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
};

export const formatFileSize = (bytes: number) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};
export const getFileIcon = (file: File) => {
  const type = file.type;
  if (type.startsWith("image/"))
    return <ImageIcon className="w-8 h-8 text-blue-500" />;
  if (type.startsWith("video/"))
    return <FileVideo className="w-8 h-8 text-purple-500" />;
  if (type.startsWith("audio/"))
    return <Music className="w-8 h-8 text-green-500" />;
  if (type.includes("pdf"))
    return <FileText className="w-8 h-8 text-red-500" />;
  if (type.includes("document") || type.includes("word"))
    return <FileText className="w-8 h-8 text-yellow-500" />;
  return <File className="w-8 h-8 text-gray-500" />;
};

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export function getDirtyFields<T extends FieldValues>(
  data: T,
  dirtyFields: Partial<FieldNamesMarkedBoolean<T>>
): Partial<T> {
  return (Object.keys(dirtyFields) as (keyof T)[]).reduce((acc, key) => {
    acc[key] = data[key];
    return acc;
  }, {} as Partial<T>);
}
