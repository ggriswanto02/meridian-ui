import type { ContributionCategory, ContributionStatus } from "@/types";

export type DashboardPeriod = {
  key: string;
  label: string;
  start: string;
  end: string;
};

export type ContributionRecord = {
  id: string;
  contributorName: string;
  category: ContributionCategory;
  amount: string;
  date: string;
  status: ContributionStatus;
};

export type DashboardSummary = {
  totalContributions: string;
  verifiedContributions: string;
  pendingVerification: number;
  reversedContributions: string;
};

export type DashboardData = {
  period: DashboardPeriod;
  summary: DashboardSummary;
  categoryBreakdown: Array<{
    category: ContributionCategory;
    amount: string;
    percentage: number;
  }>;
  recentContributions: ContributionRecord[];
  pendingContributions: ContributionRecord[];
  generatedAt: string;
};
