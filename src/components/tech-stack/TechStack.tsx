"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { TechCategoryProps, TechStackSection } from "./TechStackSection";
import { TechHighlightCard, TechHighlightProps } from "./TechHighlightCard";
import {
  DEFAULT_TECH_HIGHLIGHTS,
  DEFAULT_TECH_SECTIONS,
  TECH_STACK_COPY,
} from "./tech-stack-data";

export { DEFAULT_TECH_HIGHLIGHTS, DEFAULT_TECH_SECTIONS };

interface TechStackProps {
  label?: string;
  title?: string;
  sections?: TechCategoryProps[];
  highlights?: TechHighlightProps[];
}

export default function TechStack({
  label,
  title,
  sections,
  highlights,
}: TechStackProps) {
  const { lang } = useLanguage();
  const t = TECH_STACK_COPY[lang];

  const activeLabel = label ?? t.label;
  const activeTitle = title ?? t.title;
  const activeSections = sections ?? t.sections;
  const activeHighlights = highlights ?? t.highlights;

  return (
    <section
      id="stack"
      className="w-full max-w-5xl scroll-mt-24 text-neutral-100"
    >
      <header className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
          {activeLabel}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
          {activeTitle}
        </h2>
      </header>

      <div className="border-b border-white/[0.07]">
        {activeSections.map((section) => (
          <TechStackSection
            key={section.category}
            category={section.category}
            items={section.items}
          />
        ))}
      </div>

      {activeHighlights.length > 0 && (
        <div
          className="mt-10 grid grid-cols-1 divide-y divide-white/[0.08] rounded-xl border border-white/[0.08] bg-white/[0.015] md:grid-cols-3 md:divide-x md:divide-y-0"
          style={{
            backgroundImage:
              "radial-gradient(var(--dot-pattern-color, rgba(255, 255, 255, 0.04)) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        >
          {activeHighlights.map((highlight) => (
            <TechHighlightCard
              key={highlight.title}
              title={highlight.title}
              icon={highlight.icon}
              items={highlight.items}
            />
          ))}
        </div>
      )}
    </section>
  );
}
