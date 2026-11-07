"use client";

import Link from "next/link";
import { useTheme } from "@/i18n/ThemeContext";

type ArticleCardPreviewProps = {
  slug: string;
  image: string;
  title: string;
  description: string;
  date: string;
  author: string;
  categories: string[];
  lang: "pt" | "en";
  onCategoryClick?: (category: string) => void;
};

function resolveThumbnailUrl(
  image: string,
  category: string,
  title: string,
  lang: "pt" | "en",
  theme: "dark" | "light",
) {
  if (!image || image.startsWith("/api/og")) {
    return `/api/og?category=${encodeURIComponent(category)}&title=${encodeURIComponent(title)}&lang=${lang}&theme=${theme}`;
  }

  return image;
}

export default function ArticleCardPreview({
  slug,
  image,
  title,
  description,
  date,
  author,
  categories,
  lang,
  onCategoryClick,
}: ArticleCardPreviewProps) {
  const { theme } = useTheme();

  const dict = {
    pt: { by: "por", on: "em", in: "em" },
    en: { by: "by", on: "on", in: "in" },
  }[lang];

  const finalImage = resolveThumbnailUrl(
    image,
    categories[0] || "Architecture",
    title,
    lang,
    theme,
  );

  const truncatedDescription =
    description.length > 300
      ? `${description.slice(0, 297).trimEnd()}...`
      : description;
  const href = lang === "pt" ? `/articles/${slug}` : `/en/articles/${slug}`;

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center">
      <Link
        href={href}
        className="article-thumb-frame group/thumb relative shrink-0 overflow-hidden rounded-lg border border-white/[0.14] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-white/[0.28]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="block w-full object-cover transition-transform duration-500 group-hover/thumb:scale-[1.015] md:w-[320px]"
          src={finalImage}
          alt={`${title} cover`}
        />
      </Link>

      <div className="flex flex-col gap-1">
        <Link href={href}>
          <h2 className="article-accent text-lg leading-tight font-bold hover:underline">
            {title}
          </h2>
        </Link>

        <div className="mt-1 mb-2 text-sm text-neutral-400">
          <span>
            {dict.by} {author}
          </span>
          <span className="mx-2">|</span>
          <span>
            {dict.on} {date}
          </span>
          <span className="mx-2">|</span>
          <span>
            {dict.in}{" "}
            {categories.map((category, index) => (
              <span key={category}>
                {onCategoryClick ? (
                  <button
                    type="button"
                    onClick={() => onCategoryClick(category)}
                    className="article-accent cursor-pointer hover:underline"
                  >
                    {category}
                  </button>
                ) : (
                  <Link href="#" className="article-accent hover:underline">
                    {category}
                  </Link>
                )}
                {index < categories.length - 1 ? ", " : ""}
              </span>
            ))}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-neutral-300">
          {truncatedDescription}
        </p>
      </div>
    </div>
  );
}

