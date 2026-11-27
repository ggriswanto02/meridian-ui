import { Info } from "lucide-react";

export function DemoBanner({ period }: { period: string }) {
  return (
    <div
      role="note"
      className="flex flex-col gap-2 rounded-lg border border-warning/30 bg-warning/10 px-4 py-3 text-sm text-ink sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex items-start gap-2">
        <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-warning" />
        <p>
          <strong>Pratinjau UI — data sintetis.</strong> Angka di halaman ini bukan
          data produksi dan tidak boleh dipakai untuk laporan.
        </p>
      </div>
      <p className="shrink-0 text-xs text-muted">Periode demo: {period}</p>
    </div>
  );
}
