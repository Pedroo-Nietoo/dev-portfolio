"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";

interface ContactChannelCardsProps {
  email: string;
  directEmailLabel: string;
  sendLabel: string;
  copyLabel: string;
  copiedLabel: string;
  linkedinHref: string;
  linkedinHandle: string;
  githubHref: string;
  githubHandle: string;
}

export default function ContactChannelCards({
  email,
  directEmailLabel,
  sendLabel,
  copyLabel,
  copiedLabel,
  linkedinHref,
  linkedinHandle,
  githubHref,
  githubHandle,
}: ContactChannelCardsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      return;
    }
  };

  return (
    <div className="flex flex-col gap-3 md:col-span-6">
      <div
        style={{
          backgroundImage:
            "radial-gradient(var(--dot-pattern-color, rgba(255, 255, 255, 0.035)) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
        className="flex flex-col justify-between gap-4 rounded-xl border border-white/[0.08] bg-white/[0.015] p-5 transition-colors duration-200 hover:border-white/[0.16] sm:flex-row sm:items-center"
      >
        <a
          href={`mailto:${email}`}
          title={sendLabel}
          className="group flex min-w-0 items-center gap-3.5"
        >
          <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-neutral-300 transition-colors group-hover:border-white/[0.18] group-hover:text-white">
            <Mail className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
              {directEmailLabel}
            </span>
            <span className="mt-0.5 block truncate font-mono text-xs text-neutral-200 transition-colors group-hover:text-white sm:text-[13px]">
              {email}
            </span>
          </div>
        </a>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={`mailto:${email}`}
            title={sendLabel}
            aria-label={sendLabel}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-neutral-300 transition-all duration-200 hover:border-white/[0.2] hover:bg-white/[0.07] hover:text-white"
          >
            <Send className="h-3.5 w-3.5 text-neutral-400" />
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-neutral-300 transition-all duration-200 hover:border-white/[0.2] hover:bg-white/[0.07] hover:text-white"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">{copiedLabel}</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-neutral-500" />
                <span>{copyLabel}</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <a
          href={linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundImage:
              "radial-gradient(var(--dot-pattern-color, rgba(255, 255, 255, 0.035)) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
          className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-white/[0.015] p-5 transition-all duration-200 hover:border-white/[0.18] hover:bg-white/[0.03]"
        >
          <div className="flex items-center justify-between">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-neutral-400 transition-colors group-hover:border-white/[0.18] group-hover:text-white">
              <Linkedin className="h-4 w-4" />
            </div>
            <ArrowUpRight className="h-4 w-4 text-neutral-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </div>

          <div className="mt-4">
            <span className="block text-sm font-semibold text-white">
              LinkedIn
            </span>
            <span className="mt-0.5 block font-mono text-[11px] text-neutral-500 transition-colors group-hover:text-neutral-400">
              {linkedinHandle}
            </span>
          </div>
        </a>

        <a
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundImage:
              "radial-gradient(var(--dot-pattern-color, rgba(255, 255, 255, 0.035)) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
          className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-white/[0.015] p-5 transition-all duration-200 hover:border-white/[0.18] hover:bg-white/[0.03]"
        >
          <div className="flex items-center justify-between">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-neutral-400 transition-colors group-hover:border-white/[0.18] group-hover:text-white">
              <Github className="h-4 w-4" />
            </div>
            <ArrowUpRight className="h-4 w-4 text-neutral-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </div>

          <div className="mt-4">
            <span className="block text-sm font-semibold text-white">
              GitHub
            </span>
            <span className="mt-0.5 block font-mono text-[11px] text-neutral-500 transition-colors group-hover:text-neutral-400">
              {githubHandle}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
