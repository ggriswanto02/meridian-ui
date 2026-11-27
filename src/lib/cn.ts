export type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassValue[];

/**
 * Small, dependency-free className joiner.
 * Replace with `clsx` + `tailwind-merge` later if you need conflict resolution.
 */
export function cn(...values: ClassValue[]): string {
  const flatten = (value: ClassValue): string[] => {
    if (!value && value !== 0) return [];
    if (Array.isArray(value)) return value.flatMap(flatten);
    return String(value).split(/\s+/).filter(Boolean);
  };

  return values.flatMap(flatten).join(" ");
}
