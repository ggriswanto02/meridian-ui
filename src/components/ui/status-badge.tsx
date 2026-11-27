import { cn } from "@/lib/cn";
import type { ContributionStatus } from "@/types";

const STATUS: Record<
  ContributionStatus,
  { label: string; className: string; dotClassName: string }
> = {
  PENDING: {
    label: "Menunggu verifikasi",
    className: "bg-warning/10 text-warning",
    dotClassName: "bg-warning",
  },
  VERIFIED: {
    label: "Terverifikasi",
    className: "bg-success/10 text-success",
    dotClassName: "bg-success",
  },
  REJECTED: {
    label: "Ditolak",
    className: "bg-danger/10 text-danger",
    dotClassName: "bg-danger",
  },
  REVERSED: {
    label: "Dibatalkan",
    className: "bg-muted/15 text-muted",
    dotClassName: "bg-muted",
  },
};

export function StatusBadge({ status }: { status: ContributionStatus }) {
  const item = STATUS[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        item.className,
      )}
    >
      <span aria-hidden="true" className={cn("size-1.5 rounded-full", item.dotClassName)} />
      {item.label}
    </span>
  );
}
