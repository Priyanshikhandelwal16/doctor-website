import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function generateTimeSlots(): string[] {
  const slots: string[] = [];
  for (let h = 9; h <= 18; h++) {
    slots.push(`${h.toString().padStart(2, "0")}:00`);
    if (h < 18) slots.push(`${h.toString().padStart(2, "0")}:30`);
  }
  return slots;
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
