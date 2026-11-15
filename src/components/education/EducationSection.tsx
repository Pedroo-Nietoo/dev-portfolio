"use client";

import { GraduationCap, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { EDUCATION_COPY, type EducationItemProps } from "./education-data";

interface EducationSectionProps {
  label?: string;
  title?: string;
  items?: EducationItemProps[];
}

export default function EducationSection({
  label,
  title,
  items,
}: EducationSectionProps) {
  const { lang } = useLanguage();
  const t = EDUCATION_COPY[lang];

  const activeLabel = label ?? t.label;
  const activeTitle = title ?? t.title;
  const activeItems = items ?? t.items;

  return (
    <section id="education" className="w-full scroll-mt-24 text-neutral-100">
      <header className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
          {activeLabel}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
          {activeTitle}
        </h2>
      </header>

      <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
        {activeItems.map((item) => {
          const Icon = item.icon ?? GraduationCap;

          return (
            <div
              key={`${item.degree}-${item.institution}`}
              className="group flex flex-col gap-3 py-6 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div className="flex items-start gap-4 sm:items-center">
                <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-neutral-400 transition-colors duration-200 group-hover:border-white/[0.16] group-hover:text-white sm:mt-0">
                  <Icon className="h-4 w-4" />
                </div>

                <div>
                  <h3 className="text-base font-bold tracking-[-0.02em] text-white sm:text-lg">
                    {item.degree}
                  </h3>
                  <p className="mt-0.5 text-sm text-neutral-400">
                    {item.institution}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 pl-13 font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500 sm:shrink-0 sm:pl-0">
                <MapPin className="h-3 w-3 text-neutral-500" />
                <span>{item.location}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
