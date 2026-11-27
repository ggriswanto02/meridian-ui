import { ShieldCheck } from "lucide-react";
import { SidebarNav } from "./sidebar-nav";
import { siteConfig } from "@/config/site";
import type { NavigationItem } from "@/types";

export function Sidebar({
  navigation,
}: {
  navigation: readonly NavigationItem[];
}) {
  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col overflow-y-auto overscroll-contain border-r border-line bg-surface px-4 py-5 lg:flex">
      <div className="flex items-center gap-2.5 px-2 pb-6">
        <span className="flex size-9 items-center justify-center rounded-md bg-primary text-surface">
          <ShieldCheck aria-hidden="true" className="size-5" />
        </span>
        <div>
          <p className="text-sm font-semibold tracking-tight text-ink">
            {siteConfig.name}
          </p>
          <p className="text-xs text-muted">Amwal Internal</p>
        </div>
      </div>

      <SidebarNav items={navigation} />

      <p className="mt-auto px-2 pt-6 text-xs leading-5 text-muted">
        Data keuangan dicatat, bukan diproses sebagai pembayaran.
      </p>
    </aside>
  );
}
