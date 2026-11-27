import type { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";
import type { NavigationItem } from "@/types";

export function AppShell({
  user,
  navigation,
  children,
}: {
  user: { name: string; initials: string };
  navigation: readonly NavigationItem[];
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[16rem_1fr]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-surface"
      >
        Lewati ke konten utama
      </a>

      <Sidebar navigation={navigation} />

      <div className="flex min-h-screen flex-col">
        <Topbar user={user} navigation={navigation} />
        <main id="main-content" className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
