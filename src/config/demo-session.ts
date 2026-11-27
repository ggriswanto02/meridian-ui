/**
 * Sesi sintetis untuk pratinjau UI. Bukan sumber otorisasi.
 * Session asli dikelola backend melalui cookie HttpOnly.
 */
export const demoUser = {
  name: "Administrator",
  initials: "AD",
  permissions: [
    "person.read",
    "contribution.read",
    "contribution.verify",
    "income.read.all",
    "zakat.assessment.read",
    "report.read.monthly",
    "user.manage",
    "system.config.manage",
  ],
} as const;
