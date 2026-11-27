import type { NavigationItem } from "@/types";

/**
 * Menyaring menu berdasarkan permission untuk keperluan tampilan saja.
 * Frontend tidak boleh menganggap ini sebagai pemeriksaan akses.
 */
export function visibleNavigation(
  items: readonly NavigationItem[],
  permissions: ReadonlySet<string>,
): NavigationItem[] {
  return items.filter(
    (item) => !item.permission || permissions.has(item.permission),
  );
}
