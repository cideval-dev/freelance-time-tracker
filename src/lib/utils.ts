import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(time: number): string {
  const hours: number = Math.floor(time / 3600);
  const minutes: number = Math.floor(time % 3600 / 60);
  const seconds: number = Math.floor(time % 3600 % 60);

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
