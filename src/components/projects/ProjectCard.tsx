import {
  ArrowUpRight,
  CheckCircle2,
  FolderCog,
  Package,
  Play,
} from "lucide-react";
import type { ProjectItemProps, TicketCopy } from "./projects-data";

const CARD_DOT_STYLE = {
  backgroundImage:
    "radial-gradient(var(--dot-pattern-color, rgba(255, 255, 255, 0.035)) 1px, transparent 1px)",
  backgroundSize: "16px 16px",
} as const;

interface ProjectCardProps {
  project: ProjectItemProps;
  ticketCopy: TicketCopy;
}

export function ProjectCard({ project, ticketCopy }: ProjectCardProps) {
  const ProjectIcon = project.icon || Package;
  const variant = project.variant || "default";

  if (variant === "split-showcase") {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        style={CARD_DOT_STYLE}
        className="group/card relative grid grid-cols-1 gap-6 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.015] p-6 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.03] md:col-span-2 md:grid-cols-12 md:items-center group-hover/list:opacity-55 hover:!opacity-100"
      >
        <div className="flex flex-col justify-between md:col-span-6">
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-neutral-400 transition-colors duration-300 group-hover/card:border-white/[0.18] group-hover/card:text-white">
                  <ProjectIcon className="h-4 w-4" />
                </div>
                <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-neutral-500 transition-colors duration-300 group-hover/card:text-neutral-400">
                  {project.category}
                </span>
              </div>

              <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-500 transition-all duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/card:text-white md:hidden" />
            </div>

            <h3 className="mt-5 inline-flex items-center gap-2 text-xl font-bold tracking-[-0.02em] text-white sm:text-2xl">
              <span>{project.name}</span>
              <ArrowUpRight className="hidden h-4 w-4 shrink-0 text-neutral-500 transition-all duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/card:text-white md:inline-block" />
            </h3>

            <p className="mt-2.5 text-[13.5px] leading-relaxed text-neutral-400 transition-colors duration-300 group-hover/card:text-neutral-300">
              {project.description}
            </p>
          </div>

          {project.stack.length > 0 && (
            <div className="mt-6 border-t border-white/[0.06] pt-4">
              <p className="text-[12.5px] leading-relaxed text-neutral-500 transition-colors duration-300 group-hover/card:text-neutral-400">
                {project.stack.join(" · ")}
              </p>
            </div>
          )}
        </div>

        <div className="md:col-span-6">
          <div className="overflow-hidden rounded-lg border border-white/[0.1] bg-[#0c0c0f] shadow-2xl transition-transform duration-500 group-hover/card:scale-[1.02]">
            <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.02] px-3.5 py-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
              </div>
              {project.previewUrl && (
                <span className="truncate font-mono text-[10px] text-neutral-500">
                  {project.previewUrl}
                </span>
              )}
              <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[9px] text-emerald-400">
                STREAMING
              </span>
            </div>

            <div className="space-y-2.5 p-4 font-mono text-[11px] leading-relaxed text-neutral-400">
              <div className="flex items-center justify-between rounded border border-white/[0.06] bg-white/[0.02] px-3 py-2">
                <span className="text-neutral-300">
                  topic: payments.authorized
                </span>
                <span className="text-emerald-400">ACK · 8ms</span>
              </div>
              <div className="flex items-center justify-between rounded border border-white/[0.06] bg-white/[0.02] px-3 py-2">
                <span className="text-neutral-300">
                  topic: payments.settled
                </span>
                <span className="text-emerald-400">ACK · 11ms</span>
              </div>
              <div className="flex items-center justify-between rounded border border-white/[0.06] bg-white/[0.02] px-3 py-2 opacity-70">
                <span className="text-neutral-400">
                  consumer-group: settlement-worker
                </span>
                <span className="text-sky-400">3 partitions</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }

  if (variant === "eventer-app") {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        style={CARD_DOT_STYLE}
        className="group/card flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.015] p-6 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.03] md:row-span-2 group-hover/list:opacity-55 hover:!opacity-100"
      >
        <div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-neutral-400 transition-colors duration-300 group-hover/card:border-white/[0.18] group-hover/card:text-white">
                <ProjectIcon className="h-4 w-4" />
              </div>
              <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-neutral-500 transition-colors duration-300 group-hover/card:text-neutral-400">
                {project.category}
              </span>
            </div>

            <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-500 transition-all duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/card:text-white" />
          </div>

          <div className="relative mt-5 flex justify-center overflow-hidden rounded-lg border border-white/[0.08] bg-gradient-to-b from-[#0d0d12] to-[#09090B] px-4 pt-5 pb-0">
            <div className="-mb-3 w-full max-w-[270px] rounded-t-2xl border-x border-t border-white/[0.14] bg-[#0c0c10] px-4 pt-2.5 pb-8 shadow-2xl transition-transform duration-500 group-hover/card:-translate-y-1.5">
              <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-white/[0.12]" />

              <div className="flex items-center justify-between border-b border-dashed border-white/[0.1] pb-2.5">
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-violet-400">
                    {ticketCopy.ticketPassLabel}
                  </span>
                  <span className="text-xs font-semibold text-white">
                    Tech Summit 2026
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] text-emerald-400">
                  <CheckCircle2 className="h-2.5 w-2.5" />
                  {ticketCopy.ticketValidLabel}
                </span>
              </div>

              <div className="mt-3.5 flex items-center gap-3.5">
                <div className="shrink-0 rounded-lg bg-white p-1.5 shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(project.href)}`}
                    alt={`QR Code to ${project.name}`}
                    className="h-14 w-14"
                  />
                </div>

                <div className="min-w-0 flex-1 space-y-1 font-mono text-[10px]">
                  <div className="text-neutral-400">
                    {ticketCopy.ticketDateLabel}{" "}
                    <span className="text-neutral-200">
                      {ticketCopy.ticketDateValue}
                    </span>
                  </div>
                  <div className="text-neutral-400">
                    {ticketCopy.ticketSeatLabel}{" "}
                    <span className="text-neutral-200">
                      {ticketCopy.ticketSeatValue}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#09090B] via-[#09090B]/60 to-transparent" />
          </div>

          <h3 className="mt-6 text-lg font-bold tracking-[-0.02em] text-white sm:text-xl">
            {project.name}
          </h3>

          <p className="mt-2.5 text-[13.5px] leading-relaxed text-neutral-400 transition-colors duration-300 group-hover/card:text-neutral-300">
            {project.description}
          </p>
        </div>

        {project.stack.length > 0 && (
          <div className="mt-6 border-t border-white/[0.06] pt-4">
            <p className="text-[12.5px] leading-relaxed text-neutral-500 transition-colors duration-300 group-hover/card:text-neutral-400">
              {project.stack.join(" · ")}
            </p>
          </div>
        )}
      </a>
    );
  }

  if (variant === "ci-workflows") {
    const pipelineSteps = [
      { job: "lint", detail: "eslint · prettier", time: "18s" },
      { job: "test", detail: "unit · coverage 92%", time: "1m 04s" },
      { job: "quality-gate", detail: "sonarqube", time: "42s" },
      { job: "build", detail: "docker · buildx", time: "1m 31s" },
    ];

    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        style={CARD_DOT_STYLE}
        className="group/card flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.015] p-6 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.03] md:row-span-2 group-hover/list:opacity-55 hover:!opacity-100"
      >
        <div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-neutral-400 transition-colors duration-300 group-hover/card:border-white/[0.18] group-hover/card:text-white">
                <ProjectIcon className="h-4 w-4" />
              </div>
              <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-neutral-500 transition-colors duration-300 group-hover/card:text-neutral-400">
                {project.category}
              </span>
            </div>

            <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-500 transition-all duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/card:text-white" />
          </div>

          <div className="mt-5 overflow-hidden rounded-lg border border-white/[0.1] bg-[#0c0c0f] shadow-xl transition-transform duration-500 group-hover/card:scale-[1.015]">
            <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.02] px-3.5 py-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
              </div>
              <span className="truncate font-mono text-[10px] text-neutral-500">
                {project.previewUrl ?? "uses: ./.github/workflows/ci.yml"}
              </span>
              <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[9px] text-emerald-400">
                PASSING
              </span>
            </div>

            <div className="space-y-2 p-3.5 font-mono text-[11px] leading-relaxed text-neutral-400">
              {pipelineSteps.map((step) => (
                <div
                  key={step.job}
                  className="flex items-center justify-between rounded border border-white/[0.06] bg-white/[0.02] px-3 py-1.5"
                >
                  <span className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                    {step.job}
                    <span className="text-neutral-500">· {step.detail}</span>
                  </span>
                  <span className="text-neutral-500">{step.time}</span>
                </div>
              ))}
              <div className="flex items-center justify-between rounded border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 opacity-75">
                <span className="text-neutral-400">
                  <span className="mr-2 text-violet-400">deploy</span>
                  workflow_call · reusable
                </span>
                <span className="text-sky-400">5 repos</span>
              </div>
            </div>
          </div>

          <h3 className="mt-6 text-lg font-bold tracking-[-0.02em] text-white sm:text-xl">
            {project.name}
          </h3>

          <p className="mt-2.5 text-[13.5px] leading-relaxed text-neutral-400 transition-colors duration-300 group-hover/card:text-neutral-300">
            {project.description}
          </p>
        </div>

        {project.stack.length > 0 && (
          <div className="mt-6 border-t border-white/[0.06] pt-4">
            <p className="text-[12.5px] leading-relaxed text-neutral-500 transition-colors duration-300 group-hover/card:text-neutral-400">
              {project.stack.join(" · ")}
            </p>
          </div>
        )}
      </a>
    );
  }

  if (variant === "eventer-api") {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        style={CARD_DOT_STYLE}
        className="group/card flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.015] p-6 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.03] group-hover/list:opacity-55 hover:!opacity-100"
      >
        <div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-neutral-400 transition-colors duration-300 group-hover/card:border-white/[0.18] group-hover/card:text-white">
                <ProjectIcon className="h-4 w-4" />
              </div>
              <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-neutral-500 transition-colors duration-300 group-hover/card:text-neutral-400">
                {project.category}
              </span>
            </div>

            <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-500 transition-all duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/card:text-white" />
          </div>

          <div className="mt-5 overflow-hidden rounded-lg border border-white/[0.1] bg-[#0c0c0f] shadow-xl transition-transform duration-500 group-hover/card:scale-[1.015]">
            <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.02] px-3.5 py-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
              </div>
              {project.previewUrl && (
                <span className="truncate font-mono text-[10px] text-neutral-500">
                  {project.previewUrl}
                </span>
              )}
              <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[9px] text-emerald-400">
                200 OK
              </span>
            </div>

            <div className="space-y-2 p-3.5 font-mono text-[11px] leading-relaxed text-neutral-400">
              <div className="flex items-center justify-between rounded border border-white/[0.06] bg-white/[0.02] px-3 py-1.5">
                <span className="text-neutral-300">
                  <span className="mr-2 text-emerald-400">POST</span>
                  /events/create
                </span>
                <span className="text-emerald-400">201 · 12ms</span>
              </div>
              <div className="flex items-center justify-between rounded border border-white/[0.06] bg-white/[0.02] px-3 py-1.5">
                <span className="text-neutral-300">
                  <span className="mr-2 text-sky-400">GET</span>
                  /events/upcoming
                </span>
                <span className="text-emerald-400">200 · 5ms</span>
              </div>
              <div className="flex items-center justify-between rounded border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 opacity-75">
                <span className="text-neutral-400">
                  <span className="mr-2 text-amber-400">POST</span>
                  /tickets/verify-qr
                </span>
                <span className="text-violet-400">JWT · Guard</span>
              </div>
            </div>
          </div>

          <h3 className="mt-5 text-lg font-bold tracking-[-0.02em] text-white sm:text-xl">
            {project.name}
          </h3>

          <p className="mt-2 text-[13.5px] leading-relaxed text-neutral-400 transition-colors duration-300 group-hover/card:text-neutral-300">
            {project.description}
          </p>
        </div>

        {project.stack.length > 0 && (
          <div className="mt-6 border-t border-white/[0.06] pt-4">
            <p className="text-[12.5px] leading-relaxed text-neutral-500 transition-colors duration-300 group-hover/card:text-neutral-400">
              {project.stack.join(" · ")}
            </p>
          </div>
        )}
      </a>
    );
  }

  if (variant === "top-media") {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        style={CARD_DOT_STYLE}
        className="group/card flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.015] transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.03] group-hover/list:opacity-55 hover:!opacity-100"
      >
        <div>
          <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden border-b border-white/[0.07] bg-gradient-to-br from-neutral-900 via-[#0d0d12] to-neutral-950">
            <div className="flex items-center gap-4 opacity-50 transition-transform duration-500 group-hover/card:scale-105 group-hover/card:opacity-75">
              <div className="flex h-14 w-16 flex-col justify-between rounded-lg border border-orange-500/30 bg-orange-500/10 p-2.5">
                <span className="h-1.5 w-6 rounded bg-orange-400/60" />
                <FolderCog className="h-5 w-5 text-orange-400" />
              </div>
              <div className="flex h-14 w-16 flex-col justify-between rounded-lg border border-sky-500/30 bg-sky-500/10 p-2.5">
                <span className="h-1.5 w-6 rounded bg-sky-400/60" />
                <FolderCog className="h-5 w-5 text-sky-400" />
              </div>
              <div className="flex h-14 w-16 flex-col justify-between rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2.5">
                <span className="h-1.5 w-6 rounded bg-emerald-400/60" />
                <FolderCog className="h-5 w-5 text-emerald-400" />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-transform duration-300 group-hover/card:scale-110 group-hover/card:border-white/40">
                <Play className="ml-0.5 h-4 w-4 fill-white" />
              </span>
            </div>

            {project.videoDuration && (
              <span className="absolute bottom-3 left-3 rounded-md border border-white/10 bg-black/70 px-2 py-0.5 font-mono text-[10px] tracking-wider text-neutral-300 backdrop-blur-sm">
                {project.videoDuration}
              </span>
            )}
          </div>

          <div className="p-6 pb-0">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] text-neutral-500 transition-colors duration-300 group-hover/card:text-neutral-400">
                {project.category}
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-500 transition-all duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/card:text-white" />
            </div>

            <h3 className="mt-2.5 text-lg font-bold tracking-[-0.02em] text-white sm:text-xl">
              {project.name}
            </h3>

            <p className="mt-2 text-[13.5px] leading-relaxed text-neutral-400 transition-colors duration-300 group-hover/card:text-neutral-300">
              {project.description}
            </p>
          </div>
        </div>

        {project.stack.length > 0 && (
          <div className="mx-6 mt-5 mb-6 border-t border-white/[0.06] pt-4">
            <p className="text-[12.5px] leading-relaxed text-neutral-500 transition-colors duration-300 group-hover/card:text-neutral-400">
              {project.stack.join(" · ")}
            </p>
          </div>
        )}
      </a>
    );
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      style={CARD_DOT_STYLE}
      className="group/card flex flex-col justify-between rounded-xl border border-white/[0.08] bg-white/[0.015] p-5 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.03] group-hover/list:opacity-55 hover:!opacity-100"
    >
      <div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-neutral-400 transition-colors duration-300 group-hover/card:border-white/[0.18] group-hover/card:text-white">
              <ProjectIcon className="h-3.5 w-3.5" />
            </div>
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-500 transition-colors duration-300 group-hover/card:text-neutral-400">
              {project.category}
            </span>
          </div>

          <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-500 transition-all duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 group-hover/card:text-white" />
        </div>

        <h3 className="mt-3 text-base font-bold tracking-[-0.02em] text-white sm:text-lg">
          {project.name}
        </h3>

        <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-400 transition-colors duration-300 group-hover/card:text-neutral-300">
          {project.description}
        </p>
      </div>

      {project.stack.length > 0 && (
        <div className="mt-4 border-t border-white/[0.06] pt-3">
          <p className="text-[12px] leading-relaxed text-neutral-500 transition-colors duration-300 group-hover/card:text-neutral-400">
            {project.stack.join(" · ")}
          </p>
        </div>
      )}
    </a>
  );
}

