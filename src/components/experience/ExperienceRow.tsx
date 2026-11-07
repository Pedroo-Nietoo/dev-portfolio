import { ArrowUpRight, Briefcase } from "lucide-react";
import type { ExperienceItemProps } from "./experience-data";

interface ExperienceRowProps {
  experience: ExperienceItemProps;
  connector: string;
}

export function ExperienceRow({ experience, connector }: ExperienceRowProps) {
  const RoleIcon = experience.icon || Briefcase;

  return (
    <div className="group/row grid grid-cols-1 gap-8 py-12 transition-opacity duration-300 md:grid-cols-12 md:gap-10 group-hover/list:opacity-45 hover:!opacity-100">
      <div className="md:col-span-5">
        <div className="mb-4 inline-flex h-9 w-9 items-center justify-center border border-white/[0.08] bg-white/[0.02] text-neutral-400 transition-colors duration-300 group-hover/row:border-white/[0.18] group-hover/row:text-white">
          <RoleIcon className="h-4 w-4" />
        </div>

        <h3 className="text-xl font-bold leading-snug tracking-[-0.02em] text-white sm:text-2xl">
          {experience.position}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[13px] text-neutral-400">
          {experience.href ? (
            <a
              href={experience.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1 font-medium text-neutral-300 transition-colors hover:text-white"
            >
              <span>{experience.company}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-white" />
            </a>
          ) : (
            <span className="font-medium text-neutral-300">
              {experience.company}
            </span>
          )}
          {experience.companySubtitle && (
            <>
              <span className="text-neutral-600">·</span>
              <span>{experience.companySubtitle}</span>
            </>
          )}
        </div>

        <p className="mt-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500 transition-colors duration-300 group-hover/row:text-neutral-400">
          {experience.from} {connector} {experience.to}
        </p>
      </div>

      <div className="flex flex-col justify-between space-y-4 md:col-span-7">
        <ul className="space-y-4">
          {experience.highlights.map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <li key={idx} className="flex items-start gap-3.5">
                <ItemIcon className="mt-1 h-4 w-4 shrink-0 text-neutral-500 transition-colors duration-300 group-hover/row:text-neutral-300" />
                <p className="text-[13.5px] leading-relaxed text-neutral-400 transition-colors duration-300 group-hover/row:text-neutral-300">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>

        {experience.stack && experience.stack.length > 0 && (
          <p className="pt-2 pl-7.5 text-[12.5px] leading-relaxed text-neutral-500 transition-colors duration-300 group-hover/row:text-neutral-400">
            {experience.stack.join(" · ")}
          </p>
        )}
      </div>
    </div>
  );
}

