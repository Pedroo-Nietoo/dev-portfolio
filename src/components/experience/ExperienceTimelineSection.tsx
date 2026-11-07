"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  DEFAULT_EXPERIENCES,
  EXPERIENCE_COPY,
  type ExperienceHighlight,
  type ExperienceItemProps,
} from "./experience-data";
import { ExperienceRow } from "./ExperienceRow";

export { DEFAULT_EXPERIENCES };
export type { ExperienceHighlight, ExperienceItemProps };

interface ExperienceTimelineSectionProps {
  label?: string;
  title?: string;
  experiences?: ExperienceItemProps[];
  resumeHref?: string;
  resumeLabel?: string;
}

export default function ExperienceTimelineSection({
  label,
  title,
  experiences,
  resumeHref = "/resume.pdf",
  resumeLabel,
}: ExperienceTimelineSectionProps) {
  const { lang } = useLanguage();
  const t = EXPERIENCE_COPY[lang];

  const activeLabel = label ?? t.label;
  const activeTitle = title ?? t.title;
  const activeExperiences = experiences ?? t.experiences;
  const activeResumeLabel = resumeLabel ?? t.resumeLabel;

  return (
    <section id="experience" className="w-full scroll-mt-24 text-neutral-100">
      <header className="mb-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
          {activeLabel}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
          {activeTitle}
        </h2>
      </header>

      <div className="group/list divide-y divide-white/[0.07] border-t border-white/[0.07]">
        {activeExperiences.map((exp) => (
          <ExperienceRow
            key={`${exp.company}-${exp.position}-${exp.from}`}
            experience={exp}
            connector={t.connector}
          />
        ))}
      </div>

      {resumeHref && (
        <div className="border-t border-white/[0.07] pt-8">
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-neutral-300 transition-all duration-200 hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white"
          >
            <span>{activeResumeLabel}</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </a>
        </div>
      )}
    </section>
  );
}
