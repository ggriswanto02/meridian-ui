export type NavItem = {
  label: string;
  href: string;
};

export type NavigationIcon =
  | "dashboard"
  | "people"
  | "contributions"
  | "verification"
  | "income"
  | "zakat"
  | "reports"
  | "users"
  | "settings";

export type NavigationItem = NavItem & {
  icon: NavigationIcon;
  permission?: string;
  /** false = modul direncanakan tetapi belum tersedia. */
  available?: boolean;
};

export type ContributionStatus =
  | "PENDING"
  | "VERIFIED"
  | "REJECTED"
  | "REVERSED";

export type ContributionCategory = "Zakat" | "Infaq" | "Shodaqah";
