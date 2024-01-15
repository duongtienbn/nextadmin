import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function isExpired(dateString:string) {
  const currentDate = new Date(); // Get current date and time
  const providedDate = new Date(dateString); // Parse the provided date string

  // Compare the current date with the provided date
  return currentDate > providedDate;
}