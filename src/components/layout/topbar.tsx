import { MobileNavigation } from "./mobile-navigation";
import type { NavigationItem } from "@/types";

export function Topbar({
  user,
  navigation,
}: {
  user: { name: string; initials: string };
  navigation: readonly NavigationItem[];
}) {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-line bg-surface px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <MobileNavigation navigation={navigation} />
        <span className="text-sm font-medium text-ink">Dashboard</span>
      </div>

      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary"
        >
          {user.initials}
        </span>
        <div className="hidden sm:block">
          <p className="text-sm font-medium text-ink">{user.name}</p>
          <p className="text-xs text-muted">Pratinjau UI</p>
        </div>
      </div>
    </header>
  );
}
