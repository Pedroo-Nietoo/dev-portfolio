import ArticleList from "@/components/article/article-list";
import { getArticles } from "@/lib/article";

export default async function ArticlePageEN() {
  const articles = await getArticles("en");
  return <ArticleList articles={articles} lang="en" />;
}

