import type { ReactNode } from "react";
import { AppShell } from "@/components/layout";
import { demoUser } from "@/config/demo-session";
import { mainNavigation } from "@/config/navigation";
import { visibleNavigation } from "@/lib/permissions/navigation";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const navigation = visibleNavigation(mainNavigation, new Set(demoUser.permissions));

  return (
    <AppShell user={demoUser} navigation={navigation}>
      {children}
    </AppShell>
  );
}
