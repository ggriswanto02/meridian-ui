"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export function PeriodFilter({
  periods,
  activeKey,
}: {
  periods: readonly { key: string; label: string }[];
  activeKey: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-2">
      <label htmlFor="period" className="text-xs font-medium text-muted">
        Periode
      </label>
      <select
        id="period"
        value={activeKey}
        disabled={isPending}
        onChange={(event) => {
          const params = new URLSearchParams(searchParams.toString());
          params.set("period", event.target.value);
          startTransition(() => {
            router.push(`${pathname}?${params.toString()}`);
          });
        }}
        className="rounded-md border border-line bg-surface px-3 py-2 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-60"
      >
        {periods.map((period) => (
          <option key={period.key} value={period.key}>
            {period.label}
          </option>
        ))}
      </select>
    </div>
  );
}
