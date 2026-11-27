"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SidebarNav } from "./sidebar-nav";
import { siteConfig } from "@/config/site";
import type { NavigationItem } from "@/types";

export function MobileNavigation({
  navigation,
}: {
  navigation: readonly NavigationItem[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label="Buka navigasi"
        onClick={() => setOpen(true)}
        className="flex size-9 items-center justify-center rounded-md border border-line text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 lg:hidden"
      >
        <Menu aria-hidden="true" className="size-5" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigasi utama"
          className="fixed inset-0 z-50 lg:hidden"
        >
          <button
            type="button"
            aria-label="Tutup navigasi"
            onClick={() => setOpen(false)}
            className="absolute inset-0 size-full bg-ink/40"
          />

          <div
            id="mobile-navigation"
            className="absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col bg-surface px-4 py-5 shadow-xl"
          >
            <div className="flex items-center justify-between px-2 pb-6">
              <p className="text-sm font-semibold text-ink">{siteConfig.name}</p>
              <button
                type="button"
                aria-label="Tutup navigasi"
                onClick={() => setOpen(false)}
                className="flex size-9 items-center justify-center rounded-md text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <SidebarNav items={navigation} onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
