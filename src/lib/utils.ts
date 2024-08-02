import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const AppwriteConfig = {
  projectId: import.meta.VITE_APPWRITE_PROJECT_ID,
};
