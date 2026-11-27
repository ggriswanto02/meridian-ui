import type { DashboardData, DashboardPeriod } from "./types";

/**
 * Data sintetis HANYA untuk pratinjau komponen saat development.
 * Bukan data produksi, bukan angka riil, dan tidak boleh dipakai untuk laporan.
 */
export const demoPeriods: readonly DashboardPeriod[] = [
  { key: "2026-11", label: "November 2026", start: "2026-11-01", end: "2026-11-30" },
  { key: "2026-10", label: "Oktober 2026", start: "2026-10-01", end: "2026-10-31" },
  { key: "2026-09", label: "September 2026", start: "2026-09-01", end: "2026-09-30" },
] as const;

const demoDataByPeriod: Record<string, Omit<DashboardData, "period">> = {
  "2026-11": {
    summary: {
      totalContributions: "48750000.00",
      verifiedContributions: "43650000.00",
      pendingVerification: 3,
      reversedContributions: "1250000.00",
    },
    categoryBreakdown: [
      { category: "Zakat", amount: "24150000.00", percentage: 49.54 },
      { category: "Infaq", amount: "16200000.00", percentage: 33.23 },
      { category: "Shodaqah", amount: "8400000.00", percentage: 17.23 },
    ],
    recentContributions: [
      {
        id: "DEMO-2026-11-0142",
        contributorName: "Contoh Donatur A",
        category: "Zakat",
        amount: "2500000.00",
        date: "2026-11-27",
        status: "VERIFIED",
      },
      {
        id: "DEMO-2026-11-0141",
        contributorName: "Contoh Donatur B",
        category: "Infaq",
        amount: "750000.00",
        date: "2026-11-26",
        status: "PENDING",
      },
      {
        id: "DEMO-2026-11-0140",
        contributorName: "Contoh Donatur C",
        category: "Shodaqah",
        amount: "500000.00",
        date: "2026-11-25",
        status: "VERIFIED",
      },
      {
        id: "DEMO-2026-11-0139",
        contributorName: "Contoh Donatur D",
        category: "Zakat",
        amount: "1800000.00",
        date: "2026-11-24",
        status: "REVERSED",
      },
    ],
    pendingContributions: [
      {
        id: "DEMO-2026-11-0141",
        contributorName: "Contoh Donatur B",
        category: "Infaq",
        amount: "750000.00",
        date: "2026-11-26",
        status: "PENDING",
      },
      {
        id: "DEMO-2026-11-0138",
        contributorName: "Contoh Donatur E",
        category: "Zakat",
        amount: "1200000.00",
        date: "2026-11-23",
        status: "PENDING",
      },
      {
        id: "DEMO-2026-11-0137",
        contributorName: "Contoh Donatur F",
        category: "Shodaqah",
        amount: "350000.00",
        date: "2026-11-22",
        status: "PENDING",
      },
    ],
    generatedAt: "2026-11-27T08:00:00.000Z",
  },
  "2026-10": {
    summary: {
      totalContributions: "41200000.00",
      verifiedContributions: "39400000.00",
      pendingVerification: 1,
      reversedContributions: "800000.00",
    },
    categoryBreakdown: [
      { category: "Zakat", amount: "20800000.00", percentage: 50.49 },
      { category: "Infaq", amount: "13500000.00", percentage: 32.77 },
      { category: "Shodaqah", amount: "6900000.00", percentage: 16.74 },
    ],
    recentContributions: [
      {
        id: "DEMO-2026-10-0098",
        contributorName: "Contoh Donatur G",
        category: "Infaq",
        amount: "900000.00",
        date: "2026-10-30",
        status: "VERIFIED",
      },
      {
        id: "DEMO-2026-10-0097",
        contributorName: "Contoh Donatur H",
        category: "Zakat",
        amount: "3000000.00",
        date: "2026-10-29",
        status: "VERIFIED",
      },
      {
        id: "DEMO-2026-10-0096",
        contributorName: "Contoh Donatur I",
        category: "Shodaqah",
        amount: "450000.00",
        date: "2026-10-28",
        status: "REJECTED",
      },
    ],
    pendingContributions: [
      {
        id: "DEMO-2026-10-0095",
        contributorName: "Contoh Donatur J",
        category: "Zakat",
        amount: "1100000.00",
        date: "2026-10-27",
        status: "PENDING",
      },
    ],
    generatedAt: "2026-10-31T08:00:00.000Z",
  },
  "2026-09": {
    summary: {
      totalContributions: "38900000.00",
      verifiedContributions: "37700000.00",
      pendingVerification: 0,
      reversedContributions: "450000.00",
    },
    categoryBreakdown: [
      { category: "Zakat", amount: "19600000.00", percentage: 50.39 },
      { category: "Infaq", amount: "12400000.00", percentage: 31.88 },
      { category: "Shodaqah", amount: "6900000.00", percentage: 17.73 },
    ],
    recentContributions: [
      {
        id: "DEMO-2026-09-0081",
        contributorName: "Contoh Donatur K",
        category: "Zakat",
        amount: "2200000.00",
        date: "2026-09-29",
        status: "VERIFIED",
      },
      {
        id: "DEMO-2026-09-0080",
        contributorName: "Contoh Donatur L",
        category: "Infaq",
        amount: "600000.00",
        date: "2026-09-28",
        status: "VERIFIED",
      },
    ],
    pendingContributions: [],
    generatedAt: "2026-09-30T08:00:00.000Z",
  },
};

export function getDemoDashboardData(periodKey?: string): DashboardData | null {
  const period = demoPeriods.find((item) => item.key === periodKey) ?? demoPeriods[0];
  const body = demoDataByPeriod[period.key];

  if (!body) return null;

  return { period, ...body };
}
