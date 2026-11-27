import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { formatCurrency } from "@/lib/formatters";
import type { DashboardData } from "./types";

const BAR_TONE = ["bg-primary", "bg-info", "bg-success"] as const;

export function CategoryBreakdown({
  items,
}: {
  items: DashboardData["categoryBreakdown"];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Komposisi kontribusi</CardTitle>
        <CardDescription>
          Berdasarkan kategori pada periode terpilih
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {items.map((item, index) => (
          <div key={item.category} className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="font-medium text-ink">{item.category}</span>
              <span className="text-muted">
                {formatCurrency(item.amount)} · {item.percentage.toFixed(2)}%
              </span>
            </div>
            <div
              role="progressbar"
              aria-label={`Proporsi ${item.category}`}
              aria-valuenow={item.percentage}
              aria-valuemin={0}
              aria-valuemax={100}
              className="h-2 w-full overflow-hidden rounded-full bg-background"
            >
              <div
                className={`h-full rounded-full ${BAR_TONE[index % BAR_TONE.length]}`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
