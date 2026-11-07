import type { LucideIcon } from "lucide-react";

export interface TechHighlightProps {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export function TechHighlightCard({
  title,
  icon: Icon,
  items,
}: TechHighlightProps) {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2.5">
        <Icon className="h-4 w-4 shrink-0 text-neutral-400" />
        <h3 className="text-sm font-semibold text-neutral-100">{title}</h3>
      </div>

      <p className="mt-3 text-[13px] leading-relaxed text-neutral-400">
        {items.join(" · ")}
      </p>
    </div>
  );
}
