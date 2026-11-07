import type { ComponentPropsWithoutRef } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getArticleBySlug } from "@/lib/article";
import Link from "next/link";
import Callout from "@/components/article/callout";
import { ArticleImage } from "@/components/article/article-image";

const mdxComponents = {
  Callout: Callout,
  ArticleImage: ArticleImage,

  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-12 mb-5 text-[28px] font-bold text-white"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-10 mb-4 text-[22px] font-bold text-neutral-100"
      {...props}
    />
  ),

  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      className="mb-5 text-[16px] leading-[1.625] text-neutral-300"
      {...props}
    />
  ),

  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="article-accent underline decoration-1 underline-offset-2 transition-colors hover:opacity-80"
      {...props}
    />
  ),

  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-bold text-white" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic text-neutral-300" {...props} />
  ),

  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="mb-6 list-disc space-y-2 pl-10 text-neutral-300" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="mb-6 list-decimal space-y-2 pl-10 text-neutral-300"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-[1.625]" {...props} />
  ),
};

export default async function ArticleTemplatePT({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug, "pt");

  return (
    <article className="mx-auto max-w-4xl px-6 pt-24 pb-16 font-sans sm:px-8">
      <div className="mb-8">
        <Link href="/articles" className="article-accent text-[15px] font-medium hover:underline">
          &larr; Voltar para Artigos
        </Link>
      </div>

      <div className="mb-2">
        <span className="article-accent text-[14px] font-bold tracking-wide uppercase">
          Artigos
        </span>
      </div>

      <h1 className="mb-4 text-3xl leading-[1.2] font-extrabold text-white md:text-[40px]">
        {article.frontmatter.title}
      </h1>

      <div className="mb-10 border-b border-white/[0.08] pb-6 text-[15px] text-neutral-400">
        <span>por {article.frontmatter.author}</span>
        <span className="mx-2">|</span>
        <span>em {article.frontmatter.date}</span>
        <span className="mx-2">|</span>
        <span>
          em{" "}
          {article.frontmatter.categories.map(
            (category: string, index: number) => (
              <span key={category}>
                <Link href="#" className="article-accent hover:underline">
                  {category}
                </Link>
                {index < article.frontmatter.categories.length - 1 ? ", " : ""}
              </span>
            ),
          )}
        </span>
      </div>

      <div className="max-w-none">
        <MDXRemote source={article.content} components={mdxComponents} />
      </div>
    </article>
  );
}

