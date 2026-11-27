import { getDemoDashboardData, demoPeriods } from "./demo-data";
import type { DashboardData, DashboardPeriod } from "./types";

export const dashboardPeriods: readonly DashboardPeriod[] = demoPeriods;

/**
 * Titik integrasi data agregat dashboard.
 *
 * TODO: ganti dengan pemanggilan backend (mis. GET /api/dashboard/summary)
 * setelah API contract tersedia. Jangan hitung total dari data transaksi mentah
 * di browser; backend yang menghitung dan mengirim ringkasan.
 *
 * Aturan ringkasan: hanya kontribusi VERIFIED yang belum REVERSED yang masuk
 * total resmi.
 */
export async function getDashboardData(
  periodKey?: string,
): Promise<DashboardData | null> {
  if (process.env.NODE_ENV !== "development") return null;

  return getDemoDashboardData(periodKey);
}
