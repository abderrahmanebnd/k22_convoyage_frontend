import { AxiosError } from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleError = (error: unknown) => {
  if (error instanceof AxiosError)
    return error.response?.data.message || "Something went wrong, Try Later!";
  else if (error instanceof Error) return error.message;
  else return "Something went wrong, Try Later!";
};
