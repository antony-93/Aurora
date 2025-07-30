import { clsx, type ClassValue } from "clsx"
import { toHex, toRgba } from "color2k";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatColorByPerc(color: string, perc: number) {
  const rgbaString = formatToRgba(color);
  const match = rgbaString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  
  if (!match) return color;
  
  const [_, r, g, b] = match;
  return `rgba(${r}, ${g}, ${b}, ${perc})`;
}

export function formatToHex(color: string) {
  return toHex(color);
}

export function formatToRgba(color: string) {
  return toRgba(color);
}