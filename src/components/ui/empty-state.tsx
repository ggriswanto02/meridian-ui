import type { ReactNode } from "react";
import { Inbox } from "lucide-react";

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-6 py-12 text-center">
      <span className="flex size-10 items-center justify-center rounded-full bg-background text-muted">
        <Inbox aria-hidden="true" className="size-5" />
      </span>
      <p className="text-sm font-medium text-ink">{title}</p>
      <p className="max-w-md text-sm text-muted">{description}</p>
      {action}
    </div>
  );
}
