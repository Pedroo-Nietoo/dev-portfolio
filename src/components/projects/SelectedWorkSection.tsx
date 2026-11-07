"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ProjectCard } from "./ProjectCard";
import {
  DEFAULT_PROJECTS,
  PROJECTS_COPY,
  type ProjectCardVariant,
  type ProjectItemProps,
} from "./projects-data";

export { DEFAULT_PROJECTS };
export type { ProjectCardVariant, ProjectItemProps };

interface SelectedWorkSectionProps {
  label?: string;
  title?: string;
  projects?: ProjectItemProps[];
  githubHref?: string;
  githubLabel?: string;
}

export default function SelectedWorkSection({
  label,
  title,
  projects,
  githubHref = "https://github.com/Pedroo-Nietoo",
  githubLabel,
}: SelectedWorkSectionProps) {
  const { lang } = useLanguage();
  const t = PROJECTS_COPY[lang];

  const activeLabel = label ?? t.label;
  const activeTitle = title ?? t.title;
  const activeProjects = projects ?? t.projects;
  const activeGithubLabel = githubLabel ?? t.githubLabel;

  return (
    <section
      id="projects"
      className="w-full max-w-5xl scroll-mt-24 text-neutral-100"
    >
      <header className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
          {activeLabel}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
          {activeTitle}
        </h2>
      </header>

      <div className="group/list grid grid-cols-1 gap-4 md:grid-cols-2">
        {activeProjects.map((project) => (
          <ProjectCard key={project.name} project={project} ticketCopy={t} />
        ))}
      </div>

      {githubHref && (
        <div className="mt-8">
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-neutral-300 transition-all duration-200 hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white"
          >
            <span>{activeGithubLabel}</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </a>
        </div>
      )}
    </section>
  );
}
