"use client";

import type { MouseEvent } from "react";
import { Moon, Sun, Terminal } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage, type Language } from "@/i18n/LanguageContext";
import { useTheme } from "@/i18n/ThemeContext";

const NAVBAR_COPY = {
  en: {
    projects: "Projects",
    experience: "Experience",
    stack: "Stack",
    contact: "Contact",
    articles: "Articles",
    lightMode: "Switch to light theme",
    darkMode: "Switch to dark theme",
  },
  pt: {
    projects: "Projetos",
    experience: "Experiência",
    stack: "Stack",
    contact: "Contato",
    articles: "Artigos",
    lightMode: "Alternar para tema claro",
    darkMode: "Alternar para tema escuro",
  },
} as const;

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname() || "/";
  const router = useRouter();

  const isArticleRoute =
    pathname.startsWith("/articles") || pathname.startsWith("/en/articles");
  const activeLang: Language = isArticleRoute
    ? pathname.startsWith("/en/articles")
      ? "en"
      : "pt"
    : lang;

  const t = NAVBAR_COPY[activeLang];
  const isLight = theme === "light";

  const handleSmoothScroll = (
    e: MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    if (isArticleRoute) {
      return;
    }

    e.preventDefault();
    if (targetId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "#top");
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  const handleLanguageChange = (nextLang: Language) => {
    setLang(nextLang);

    if (!isArticleRoute || nextLang === activeLang) {
      return;
    }

    if (nextLang === "en") {
      const nextPath = pathname.startsWith("/articles")
        ? `/en${pathname}`
        : "/en/articles";
      router.push(nextPath);
    } else {
      const nextPath = pathname.startsWith("/en/articles")
        ? pathname.replace(/^\/en\/articles/, "/articles")
        : "/articles";
      router.push(nextPath);
    }
  };

  const articlesHref = activeLang === "en" ? "/en/articles" : "/articles";
  const isArticlesEnabled =
    process.env.NEXT_PUBLIC_ENABLE_ARTICLES?.toLowerCase() === "true";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] backdrop-blur-md transition-colors duration-300 ${
        isLight ? "bg-[#FAFAFA]/80" : "bg-[#09090B]/75"
      }`}
    >
      <div className="mx-auto flex h-14 w-full max-w-[1060px] items-center justify-between px-6 sm:px-12 lg:px-16">
        <a
          href={isArticleRoute ? "/" : "#top"}
          onClick={(e) => handleSmoothScroll(e, "top")}
          className="group inline-flex items-center gap-2.5 text-white"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.1] bg-white/[0.03] text-neutral-300 transition-colors group-hover:border-white/[0.2] group-hover:text-white">
            <Terminal className="h-3.5 w-3.5" />
          </span>
          <span className="text-[13px] font-semibold tracking-tight text-neutral-100">
            Pedro Nieto
          </span>
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden items-center gap-6 text-xs text-neutral-400 sm:flex">
            <a
              href={isArticleRoute ? "/#projects" : "#projects"}
              onClick={(e) => handleSmoothScroll(e, "projects")}
              className="transition-colors duration-200 hover:text-white"
            >
              {t.projects}
            </a>
            <a
              href={isArticleRoute ? "/#experience" : "#experience"}
              onClick={(e) => handleSmoothScroll(e, "experience")}
              className="transition-colors duration-200 hover:text-white"
            >
              {t.experience}
            </a>
            <a
              href={isArticleRoute ? "/#stack" : "#stack"}
              onClick={(e) => handleSmoothScroll(e, "stack")}
              className="transition-colors duration-200 hover:text-white"
            >
              {t.stack}
            </a>
            <a
              href={isArticleRoute ? "/#contact" : "#contact"}
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="transition-colors duration-200 hover:text-white"
            >
              {t.contact}
            </a>
            {isArticlesEnabled && (
              <Link
                href={articlesHref}
                className={`transition-colors duration-200 hover:text-white ${
                  isArticleRoute ? "font-medium text-white" : ""
                }`}
              >
                {t.articles}
              </Link>
            )}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              title={isLight ? t.darkMode : t.lightMode}
              aria-label={isLight ? t.darkMode : t.lightMode}
              className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-neutral-400 transition-all duration-200 hover:border-white/[0.2] hover:text-white"
            >
              {isLight ? (
                <Moon className="h-3.5 w-3.5" />
              ) : (
                <Sun className="h-3.5 w-3.5" />
              )}
            </button>

            <div
              role="group"
              aria-label="Language switcher"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] tracking-wider"
            >
              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`cursor-pointer transition-colors ${
                  activeLang === "en"
                    ? "font-semibold text-white"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                EN
              </button>
              <span className="text-neutral-600">/</span>
              <button
                type="button"
                onClick={() => handleLanguageChange("pt")}
                className={`cursor-pointer transition-colors ${
                  activeLang === "pt"
                    ? "font-semibold text-white"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                PT
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
