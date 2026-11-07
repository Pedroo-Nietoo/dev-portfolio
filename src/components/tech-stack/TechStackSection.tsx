"use client";

import type { ComponentType, CSSProperties } from "react";
import { useTheme } from "@/i18n/ThemeContext";

export type TechIcon = ComponentType<{ className?: string }>;

export interface TechItem {
  name: string;
  icon: TechIcon;
  color?: string;
}

export interface TechCategoryProps {
  category: string;
  items: TechItem[];
}

const LIGHT_COLOR_OVERRIDES: Record<string, string> = {
  "#FFFFFF": "#09090B",
  "#ffffff": "#09090B",
  "#E2E8F0": "#27272A",
  "#F7DF1E": "#CA8A04",
};

export function TechBadge({ name, icon: Icon, color = "#ffffff" }: TechItem) {
  const { theme } = useTheme();
  const resolvedColor =
    theme === "light" ? (LIGHT_COLOR_OVERRIDES[color] ?? color) : color;

  return (
    <span
      style={{ "--tech-color": resolvedColor } as CSSProperties}
      className="group inline-flex cursor-default items-center gap-2 whitespace-nowrap rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[13px] font-medium text-neutral-300 transition-all duration-200 hover:border-[color-mix(in_srgb,var(--tech-color)_55%,transparent)] hover:bg-[color-mix(in_srgb,var(--tech-color)_12%,rgba(255,255,255,0.03))] hover:text-white hover:shadow-[0_0_20px_-4px_color-mix(in_srgb,var(--tech-color)_45%,transparent)]"
    >
      <Icon className="h-3.5 w-3.5 shrink-0 text-neutral-500 transition-colors duration-200 group-hover:text-[var(--tech-color)]" />
      <span>{name}</span>
    </span>
  );
}

export function TechStackSection({ category, items }: TechCategoryProps) {
  return (
    <div className="flex flex-col gap-3 border-t border-white/[0.07] py-4.5 md:flex-row md:items-center md:gap-5">
      <div className="w-full shrink-0 md:w-44">
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-500">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-wrap gap-2">
        {items.map((item) => (
          <TechBadge
            key={item.name}
            name={item.name}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}
