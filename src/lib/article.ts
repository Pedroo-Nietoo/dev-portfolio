import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

const contentDir = path.join(process.cwd(), "src/content");

export async function getArticles(lang: "pt" | "en") {
  const dir = path.join(contentDir, lang);

  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir);

  const articles = files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".mdx", ""),
      ...(data as {
        title: string;
        description: string;
        date: string;
        author: string;
        categories: string[];
        image: string;
      }),
    };
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getArticleBySlug(slug: string, lang: "pt" | "en") {
  let filePath = path.join(contentDir, lang, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    const fallbackLang = lang === "en" ? "pt" : "en";
    const fallbackPath = path.join(contentDir, fallbackLang, `${slug}.mdx`);
    if (fs.existsSync(fallbackPath)) {
      filePath = fallbackPath;
    } else {
      notFound();
    }
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    frontmatter: data,
    content,
  };
}

