import ArticleList from "@/components/article/article-list";
import { getArticles } from "@/lib/article";

export default async function ArticlePagePT() {
  const articles = await getArticles("pt");
  return <ArticleList articles={articles} lang="pt" />;
}

