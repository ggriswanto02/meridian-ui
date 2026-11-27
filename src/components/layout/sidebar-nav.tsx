"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Calculator,
  ClipboardCheck,
  HandCoins,
  LayoutDashboard,
  LockKeyhole,
  Settings,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";
import type { NavigationIcon, NavigationItem } from "@/types";

const ICONS: Record<NavigationIcon, LucideIcon> = {
  dashboard: LayoutDashboard,
  people: Users,
  contributions: HandCoins,
  verification: ClipboardCheck,
  income: Wallet,
  zakat: Calculator,
  reports: BarChart3,
  users: Users,
  settings: Settings,
};

export function SidebarNav({
  items,
  onNavigate,
}: {
  items: readonly NavigationItem[];
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <nav aria-label="Navigasi utama" className="flex flex-col gap-1">
      {items.map((item) => {
        const Icon = ICONS[item.icon];
        const active = pathname === item.href;
        const enabled = item.available !== false;

        const className = cn(
          "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
          active
            ? "bg-primary/10 font-medium text-primary"
            : "text-muted hover:bg-background hover:text-ink",
          !enabled && "cursor-not-allowed opacity-50",
        );

        const content = (
          <>
            <Icon aria-hidden="true" className="size-4.5 shrink-0" />
            <span className="flex-1">{item.label}</span>
            {!enabled && (
              <LockKeyhole aria-hidden="true" className="size-3.5 shrink-0" />
            )}
          </>
        );

        if (!enabled) {
          return (
            <span
              key={item.href}
              aria-disabled="true"
              className={className}
              title="Modul ini belum tersedia"
            >
              {content}
            </span>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={className}
            onClick={onNavigate}
          >
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
