import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  EmptyState,
  StatusBadge,
} from "@/components/ui";
import { formatCurrency, formatDate } from "@/lib/formatters";
import type { ContributionRecord } from "./types";

export function RecentContributions({
  items,
}: {
  items: ContributionRecord[];
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Kontribusi terbaru</CardTitle>
        <CardDescription>Entri paling recent pada periode terpilih</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        {items.length === 0 ? (
          <EmptyState
            title="Belum ada kontribusi"
            description="Tidak ada entri kontribusi untuk periode ini."
          />
        ) : (
          <>
            {/* Tabel untuk desktop/tablet */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full text-left text-sm">
                <thead className="bg-background text-xs uppercase tracking-wide text-muted">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-medium">ID</th>
                    <th scope="col" className="px-5 py-3 font-medium">Nama</th>
                    <th scope="col" className="px-5 py-3 font-medium">Kategori</th>
                    <th scope="col" className="px-5 py-3 text-right font-medium">Nominal</th>
                    <th scope="col" className="px-5 py-3 font-medium">Tanggal</th>
                    <th scope="col" className="px-5 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {items.map((item) => (
                    <tr key={item.id} className="text-ink">
                      <td className="whitespace-nowrap px-5 py-3 font-mono text-xs text-muted">
                        {item.id}
                      </td>
                      <td className="px-5 py-3">{item.contributorName}</td>
                      <td className="px-5 py-3">{item.category}</td>
                      <td className="whitespace-nowrap px-5 py-3 text-right font-medium">
                        {formatCurrency(item.amount)}
                      </td>
                      <td className="whitespace-nowrap px-5 py-3 text-muted">
                        {formatDate(item.date)}
                      </td>
                      <td className="px-5 py-3">
                        <StatusBadge status={item.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Kartu untuk mobile */}
            <ul className="divide-y divide-line md:hidden">
              {items.map((item) => (
                <li key={item.id} className="flex flex-col gap-2 px-5 py-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-medium text-ink">{item.contributorName}</p>
                    <StatusBadge status={item.status} />
                  </div>
                  <p className="font-mono text-xs text-muted">{item.id}</p>
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-muted">
                      {item.category} · {formatDate(item.date)}
                    </span>
                    <span className="font-medium text-ink">
                      {formatCurrency(item.amount)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </CardContent>
    </Card>
  );
}
