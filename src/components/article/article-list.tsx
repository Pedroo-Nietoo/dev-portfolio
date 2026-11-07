"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Check, Search, SlidersHorizontal, X } from "lucide-react";
import ArticleCardPreview from "./article-card-preview";

const ARTICLES_PER_PAGE = 5;

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export interface ArticleSummary {
  slug: string;
  image: string;
  title: string;
  description: string;
  date: string;
  author: string;
  categories: string[];
}

export default function ArticleList({
  articles,
  lang,
}: {
  articles: ArticleSummary[];
  lang: "pt" | "en";
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [categoryQuery, setCategoryQuery] = useState("");
  const filterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const copy = {
    pt: {
      title: "Artigos",
      desc: "Onde compartilho meus pensamentos, experiências, projetos recentes e mais.",
      searchPlaceholder: "Pesquisar por título ou palavra-chave...",
      filterButton: "Filtrar",
      filterSearchPlaceholder: "Buscar palavra-chave...",
      noCategoryFound: "Nenhuma palavra-chave encontrada.",
      clearFilters: "Limpar",
      emptyText: "Nenhum artigo encontrado para a pesquisa ou filtros aplicados.",
      resetAll: "Limpar pesquisa e filtros",
      prevText: "Anterior",
      nextText: "Próximo",
      pageOfText: (page: number, total: number) => `Página ${page} de ${total}`,
    },
    en: {
      title: "Articles",
      desc: "Where I share my thoughts, experiences, recent projects and more.",
      searchPlaceholder: "Search by title or keyword...",
      filterButton: "Filter",
      filterSearchPlaceholder: "Find keyword...",
      noCategoryFound: "No keyword found.",
      clearFilters: "Clear",
      emptyText: "No articles found matching your search or applied filters.",
      resetAll: "Clear search and filters",
      prevText: "Previous",
      nextText: "Next",
      pageOfText: (page: number, total: number) => `Page ${page} of ${total}`,
    },
  }[lang];

  const allCategories = useMemo(() => {
    const set = new Set<string>();
    for (const article of articles) {
      if (Array.isArray(article.categories)) {
        for (const cat of article.categories) {
          if (cat) set.add(cat);
        }
      }
    }
    return Array.from(set);
  }, [articles]);

  const visibleCategories = useMemo(() => {
    const q = normalizeText(categoryQuery.trim());
    const matching = q
      ? allCategories.filter((cat) => normalizeText(cat).includes(q))
      : allCategories;

    return [...matching].sort((a, b) => {
      const aSel = selectedCategories.includes(a) ? 0 : 1;
      const bSel = selectedCategories.includes(b) ? 0 : 1;
      if (aSel !== bSel) return aSel - bSel;
      return a.localeCompare(b);
    });
  }, [allCategories, categoryQuery, selectedCategories]);

  const filteredArticles = useMemo(() => {
    const query = normalizeText(searchQuery.trim());

    return articles.filter((article) => {
      const categories: string[] = Array.isArray(article.categories)
        ? article.categories
        : [];

      const matchesSearch =
        !query ||
        normalizeText(article.title || "").includes(query) ||
        categories.some((cat) => normalizeText(cat).includes(query));

      const matchesCategories =
        selectedCategories.length === 0 ||
        selectedCategories.some((selected) => categories.includes(selected));

      return matchesSearch && matchesCategories;
    });
  }, [articles, searchQuery, selectedCategories]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE) || 1;
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = filteredArticles.slice(
    startIndex,
    startIndex + ARTICLES_PER_PAGE,
  );

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category],
    );
    setCurrentPage(1);
  };

  const clearAll = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (safePage < totalPages) setCurrentPage(safePage + 1);
  };
  const handlePrevPage = () => {
    if (safePage > 1) setCurrentPage(safePage - 1);
  };

  return (
    <div className="mx-auto min-h-screen max-w-5xl scroll-smooth px-8 pt-24 pb-16 sm:pt-28 md:pt-32">
      <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-4xl">
        {copy.title}
      </h1>
      <p className="mb-8 text-neutral-400">{copy.desc}</p>

      {/* Search & Filter Dropdown */}
      <div className="mb-10 flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder={copy.searchPlaceholder}
            className="w-full rounded-lg border border-white/[0.1] bg-white/[0.02] py-2 pr-9 pl-10 text-sm text-white placeholder-neutral-500 transition-colors outline-none focus:border-white/[0.22]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => handleSearchChange("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-neutral-500 transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div ref={filterRef} className="relative">
          <button
            type="button"
            onClick={() => setIsFilterOpen((prev) => !prev)}
            aria-expanded={isFilterOpen}
            title={copy.filterButton}
            className={`inline-flex h-[38px] cursor-pointer items-center gap-2 rounded-lg border px-3 text-sm transition-colors ${
              selectedCategories.length > 0
                ? "border-white/[0.22] bg-white/[0.05] text-white"
                : "border-white/[0.1] bg-white/[0.02] text-neutral-400 hover:border-white/[0.2] hover:text-white"
            }`}
          >
            <SlidersHorizontal className="h-4 w-4" />
            {selectedCategories.length > 0 && (
              <span className="font-mono text-xs text-neutral-300">
                {selectedCategories.length}
              </span>
            )}
          </button>

          {isFilterOpen && allCategories.length > 0 && (
            <div className="absolute right-0 z-30 mt-2 w-60 rounded-lg border border-white/[0.1] bg-[#0c0c0f] p-1.5 shadow-xl">
              <div className="border-b border-white/[0.08] px-1 pb-1.5">
                <input
                  type="text"
                  value={categoryQuery}
                  onChange={(e) => setCategoryQuery(e.target.value)}
                  placeholder={copy.filterSearchPlaceholder}
                  className="w-full rounded-md bg-white/[0.03] px-2.5 py-1.5 text-xs text-white placeholder-neutral-500 outline-none focus:bg-white/[0.06]"
                />
              </div>

              <div className="mt-1 max-h-52 overflow-y-auto">
                {visibleCategories.length > 0 ? (
                  visibleCategories.map((category) => {
                    const isSelected = selectedCategories.includes(category);
                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => toggleCategory(category)}
                        className={`flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-white/[0.06] ${
                          isSelected
                            ? "font-medium text-white"
                            : "text-neutral-300 hover:text-white"
                        }`}
                      >
                        <span className="truncate">{category}</span>
                        {isSelected && (
                          <Check className="h-4 w-4 shrink-0 text-white" />
                        )}
                      </button>
                    );
                  })
                ) : (
                  <p className="px-3 py-3 text-xs text-neutral-500">
                    {copy.noCategoryFound}
                  </p>
                )}
              </div>

              {selectedCategories.length > 0 && (
                <div className="mt-1 border-t border-white/[0.08] pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategories([]);
                      setCurrentPage(1);
                    }}
                    className="w-full cursor-pointer rounded-md px-2.5 py-1.5 text-left text-xs text-neutral-400 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {copy.clearFilters}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Articles List */}
      {currentArticles.length > 0 ? (
        <div className="flex flex-col">
          {currentArticles.map((article, index) => (
            <div key={article.slug}>
              <ArticleCardPreview
                {...article}
                lang={lang}
                onCategoryClick={(category) => toggleCategory(category)}
              />
              {index < currentArticles.length - 1 && (
                <hr className="my-8 border-white/[0.08]" />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="py-12 text-sm text-neutral-400">
          <p>{copy.emptyText}</p>
          <button
            type="button"
            onClick={clearAll}
            className="article-accent mt-2 cursor-pointer text-sm font-medium hover:underline"
          >
            {copy.resetAll}
          </button>
        </div>
      )}

      {/* Pagination */}
      {filteredArticles.length > 0 && (
        <div className="mt-12 flex items-center justify-between border-t border-white/[0.08] pt-6">
          <button
            onClick={handlePrevPage}
            disabled={safePage === 1}
            className="cursor-pointer rounded-md border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-sm font-medium text-neutral-200 transition-colors hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {copy.prevText}
          </button>

          <span className="text-sm text-neutral-400">
            {copy.pageOfText(safePage, totalPages)}
          </span>

          <button
            onClick={handleNextPage}
            disabled={safePage === totalPages}
            className="cursor-pointer rounded-md border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-sm font-medium text-neutral-200 transition-colors hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {copy.nextText}
          </button>
        </div>
      )}
    </div>
  );
}
