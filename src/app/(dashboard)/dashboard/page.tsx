import { Suspense } from "react";
import { Card } from "@/components/ui";
import { demoUser } from "@/config/demo-session";
import {
  CategoryBreakdown,
  DashboardSkeleton,
  DemoBanner,
  PendingVerification,
  PeriodFilter,
  RecentContributions,
  SummaryCards,
  dashboardPeriods,
  getDashboardData,
} from "@/features/dashboard";

const hasPermission = (permission: string) =>
  new Set<string>(demoUser.permissions).has(permission);

export default function DashboardPage({ searchParams }: PageProps<"/dashboard">) {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardContent searchParams={searchParams} />
    </Suspense>
  );
}

async function DashboardContent({
  searchParams,
}: {
  searchParams: PageProps<"/dashboard">["searchParams"];
}) {
  const params = await searchParams;
  const requestedPeriod = typeof params.period === "string" ? params.period : undefined;
  const data = await getDashboardData(requestedPeriod);

  if (!data) {
    return (
      <div className="flex flex-col gap-6">
        <PageHeading />
        <Card>
          <div className="px-5 py-10 text-center">
            <h2 className="text-sm font-semibold text-ink">
              Dashboard belum tersedia
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted">
              Ringkasan dashboard berasal dari data agregat backend. Data belum
              ditampilkan sampai kontrak API tersedia dan terhubung.
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <PageHeading>
        <PeriodFilter periods={dashboardPeriods} activeKey={data.period.key} />
      </PageHeading>

      <DemoBanner period={data.period.label} />

      <SummaryCards summary={data.summary} />

      <div className="grid gap-4 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <RecentContributions items={data.recentContributions} />
        <PendingVerification
          items={data.pendingContributions}
          canVerify={hasPermission("contribution.verify")}
        />
      </div>

      <CategoryBreakdown items={data.categoryBreakdown} />
    </div>
  );
}

function PageHeading({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-ink">Dashboard</h1>
        <p className="text-sm text-muted">
          Ringkasan kontribusi dan status verifikasi yayasan.
        </p>
      </div>
      {children}
    </div>
  );
}
