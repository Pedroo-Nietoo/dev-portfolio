import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/intro/Navbar";

export default function ArticleLayout({ children }: { children: ReactNode }) {
  const isArticlesEnabled =
    process.env.NEXT_PUBLIC_ENABLE_ARTICLES?.toLowerCase() === "true" ||
    process.env.ENABLE_ARTICLES?.toLowerCase() === "true";

  if (!isArticlesEnabled) {
    notFound();
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
