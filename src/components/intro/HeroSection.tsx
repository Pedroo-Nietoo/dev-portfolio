"use client";

import { useRef, useState, type MouseEvent } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/i18n/ThemeContext";
import { HeroBackgroundCanvas } from "./HeroBackgroundCanvas";

const ASCII_WATERMARK = `=~![]?0]?@%?#(/]1*[$]=1}&*0?*)%
()]&%(1*>\\@[>/0#{=$}}?<?[]>&>))=
/*<=]>#+??0#[$%](#@1&1>{@$<>?*>*(
%@#/#]&#-{+}0&[&[=<}$+>@@%%%=\\[%<<1
'#>/>$+?[]%%$={1(/$0&10%)#@1<\\@\\#>
@\\*\\]$(()>$$0}&#=}$@{}/$%$/*%01]
<<[<1=]1?@>&*/*1+@{0$0]0/<[]]</@
   -=}(?#<?1+0[>>%<\\*(0}[%=$[&@?
     +?\\<??[#]&<<=](+>1#<<1++<%
       ?*0<?[]<(&]&]$?@10&&^?%
         *1+<[0]0&&$1\\?`;

const HERO_COPY = {
  en: {
    role: "FULL-STACK SOFTWARE ENGINEER",
    location: "SÃO JOSÉ, BRASIL",
    headlineTop: "Engineering software",
    headlineBottom: "that holds under pressure.",
    description:
      "Over four years building backend and full-stack systems for finance, healthcare, and telecom. Currently at Capgemini working on mission-critical financial services, where the focus is distributed systems, clean architecture, and AI engineering.",
    cta: "Get in touch",
    copyTitle: "Click to copy email",
    scroll: "SCROLL",
  },
  pt: {
    role: "ENGENHEIRO DE SOFTWARE FULL-STACK",
    location: "SÃO JOSÉ, BRASIL",
    headlineTop: "Projetando sistemas",
    headlineBottom: "feitos para aguentar pressão.",
    description:
      "Mais de quatro anos construindo sistemas backend e full-stack para finanças, saúde e telecomunicações. Atualmente na Capgemini trabalhando em serviços financeiros críticos, onde o foco é sistemas distribuídos, arquitetura limpa e engenharia de IA.",
    cta: "Entrar em contato",
    copyTitle: "Clique para copiar o e-mail",
    scroll: "ROLAR",
  },
} as const;

interface HeroSectionProps {
  role?: string;
  location?: string;
  headlineTop?: string;
  headlineBottom?: string;
  description?: string;
  email?: string;
  githubHref?: string;
  linkedinHref?: string;
}

export default function HeroSection({
  role,
  location,
  headlineTop,
  headlineBottom,
  description,
  email = "pedronieto.2005@gmail.com",
  githubHref = "https://github.com/Pedroo-Nietoo",
  linkedinHref = "https://www.linkedin.com/in/pedroo-nietoo/",
}: HeroSectionProps) {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const t = HERO_COPY[lang];
  const isLight = theme === "light";
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { }
  };

  const handleScrollDown = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", "#about");
    }
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative w-full overflow-hidden border-b border-white/[0.07]"
    >
      <HeroBackgroundCanvas sectionRef={sectionRef} isLight={isLight} />

      <div className="relative z-10 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-44">
        <div className="mx-auto flex min-h-screen w-full max-w-[1060px] flex-col justify-between border-x border-white/[0.07] px-6 pt-14 sm:px-12 lg:px-16">
          <pre
            aria-hidden="true"
            className={`pointer-events-none hidden select-none font-mono text-[11px] leading-[1.35] tracking-[0.18em] md:block md:absolute md:top-16 md:right-8 ${isLight ? "text-zinc-900/[0.055]" : "text-white/[0.05]"
              }`}
          >
            {ASCII_WATERMARK}
          </pre>

          <div />

          <div className="mx-auto flex max-w-3xl flex-col items-center py-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400">
              <span>{role ?? t.role}</span>
              <span className="text-neutral-600">·</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3 text-neutral-500" />
                <span>{location ?? t.location}</span>
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-[1.06] tracking-[-0.04em] text-white sm:text-6xl md:text-[64px]">
              <span className="block">{headlineTop ?? t.headlineTop}</span>
              <span className="block">{headlineBottom ?? t.headlineBottom}</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-[15px]">
              {description ?? t.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${email}`}
                className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.14] bg-white/[0.06] px-4 py-2.5 text-xs font-medium text-white backdrop-blur-sm transition-all duration-200 hover:border-white/[0.25] hover:bg-white/[0.1]"
              >
                <span>{t.cta}</span>
                <ChevronRight className="h-3.5 w-3.5 text-neutral-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-lg border border-white/[0.08] bg-black/50 px-4 py-2.5 font-mono text-xs text-neutral-300 backdrop-blur-sm transition-all duration-200 hover:border-white/[0.18] hover:text-white"
                title={t.copyTitle}
              >
                <Mail className="h-3.5 w-3.5 text-neutral-500 transition-colors group-hover:text-neutral-300" />
                <span>{email}</span>
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5 text-neutral-500 transition-colors group-hover:text-neutral-300" />
                )}
              </button>
            </div>

            <div className="mt-5 flex items-center justify-center gap-5 font-mono text-[11px] text-neutral-400">
              <a
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Github className="h-3.5 w-3.5 text-neutral-500 transition-colors group-hover:text-white" />
                <span>GitHub</span>
                <ArrowUpRight className="h-3 w-3 text-neutral-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>

              <a
                href={linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Linkedin className="h-3.5 w-3.5 text-neutral-500 transition-colors group-hover:text-white" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3 w-3 text-neutral-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div className="pb-8 text-center">
            <a
              href="#about"
              onClick={handleScrollDown}
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500 transition-colors hover:text-neutral-300"
            >
              <ChevronDown className="h-3 w-3 animate-bounce" />
              <span>{t.scroll}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
