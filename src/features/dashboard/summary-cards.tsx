import { AlertCircle, ArrowDownRight, CircleCheck, Landmark } from "lucide-react";
import { Card } from "@/components/ui";
import { formatCurrency } from "@/lib/formatters";
import type { DashboardSummary } from "./types";

function SummaryCard({
  label,
  value,
  note,
  icon: Icon,
  tone,
}: {
  label: string;
  value: string;
  note: string;
  icon: typeof Landmark;
  tone: "primary" | "success" | "warning" | "muted";
}) {
  const toneClass = {
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    muted: "bg-muted/15 text-muted",
  }[tone];

  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm text-muted">{label}</p>
        <span className={`flex size-9 items-center justify-center rounded-md ${toneClass}`}>
          <Icon aria-hidden="true" className="size-4.5" />
        </span>
      </div>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-ink">{value}</p>
      <p className="mt-1 text-xs text-muted">{note}</p>
    </Card>
  );
}

export function SummaryCards({ summary }: { summary: DashboardSummary }) {
  return (
    <section aria-label="Ringkasan keuangan">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          label="Total kontribusi"
          value={formatCurrency(summary.totalContributions)}
          note="Seluruh kontribusi tercatat dalam periode"
          icon={Landmark}
          tone="primary"
        />
        <SummaryCard
          label="Total terverifikasi"
          value={formatCurrency(summary.verifiedContributions)}
          note="Verified & belum reversed — total resmi"
          icon={CircleCheck}
          tone="success"
        />
        <SummaryCard
          label="Menunggu verifikasi"
          value={String(summary.pendingVerification)}
          note="Kontribusi berstatus PENDING"
          icon={AlertCircle}
          tone="warning"
        />
        <SummaryCard
          label="Dibatalkan"
          value={formatCurrency(summary.reversedContributions)}
          note="Kontribusi REVERSED, tidak masuk total resmi"
          icon={ArrowDownRight}
          tone="muted"
        />
      </div>
    </section>
  );
}
