import { ClipboardCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  EmptyState,
} from "@/components/ui";
import { formatCurrency, formatDate } from "@/lib/formatters";
import type { ContributionRecord } from "./types";

export function PendingVerification({
  items,
  canVerify,
}: {
  items: ContributionRecord[];
  canVerify: boolean;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Menunggu verifikasi</CardTitle>
        <CardDescription>
          {canVerify
            ? "Kontribusi yang perlu ditinjau administrator"
            : "Anda tidak memiliki izin untuk memverifikasi"}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        {items.length === 0 ? (
          <EmptyState
            title="Tidak ada antrean verifikasi"
            description="Semua kontribusi pada periode ini sudah ditinjau."
          />
        ) : (
          <ul className="divide-y divide-line">
            {items.map((item) => (
              <li key={item.id} className="flex flex-col gap-2 px-5 py-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-ink">
                      {item.contributorName}
                    </p>
                    <p className="font-mono text-xs text-muted">{item.id}</p>
                  </div>
                  <p className="shrink-0 text-sm font-semibold text-ink">
                    {formatCurrency(item.amount)}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs text-muted">
                    {item.category} · {formatDate(item.date)}
                  </p>
                  {canVerify && (
                    <button
                      type="button"
                      disabled
                      title="Modul verifikasi belum tersedia"
                      className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 text-xs font-medium text-muted opacity-60"
                    >
                      <ClipboardCheck aria-hidden="true" className="size-3.5" />
                      Tinjau
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
