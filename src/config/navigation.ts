import type { NavigationItem } from "@/types";

/**
 * Visibilitas menu hanya untuk UX. Backend tetap menjadi otoritas izin.
 * `available: false` menandai modul yang belum punya halaman/API.
 */
export const mainNavigation: readonly NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    available: true,
  },
  {
    label: "Data Orang",
    href: "/persons",
    icon: "people",
    permission: "person.read",
  },
  {
    label: "Kontribusi",
    href: "/contributions",
    icon: "contributions",
    permission: "contribution.read",
  },
  {
    label: "Verifikasi",
    href: "/verification",
    icon: "verification",
    permission: "contribution.verify",
  },
  {
    label: "Riwayat Pemasukan",
    href: "/income",
    icon: "income",
    permission: "income.read.all",
  },
  {
    label: "Zakat",
    href: "/zakat",
    icon: "zakat",
    permission: "zakat.assessment.read",
  },
  {
    label: "Laporan",
    href: "/reports",
    icon: "reports",
    permission: "report.read.monthly",
  },
  {
    label: "Pengguna",
    href: "/users",
    icon: "users",
    permission: "user.manage",
  },
  {
    label: "Pengaturan",
    href: "/settings",
    icon: "settings",
    permission: "system.config.manage",
  },
] as const;
