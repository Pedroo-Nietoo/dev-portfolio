"use client";

import { useState } from "react";
import BlogCardPreview from "./blog-card-preview";

const POSTS_PER_PAGE = 5;

export default function BlogList({ posts, lang }: { posts: any[], lang: 'pt' | 'en' }) {
 const [currentPage, setCurrentPage] = useState(1);

 const title = lang === 'pt' ? 'Blog Pessoal' : 'Personal Blog';
 const desc = lang === 'pt'
  ? 'Onde compartilho meus pensamentos, experiências, projetos recentes e mais.'
  : 'Where I share my thoughts, experiences, recent projects and more.';
 const prevText = lang === 'pt' ? 'Anterior' : 'Previous';
 const nextText = lang === 'pt' ? 'Próximo' : 'Next';
 const pageOfText = lang === 'pt' ? `Página ${currentPage} de` : `Page ${currentPage} of`;

 const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE) || 1;
 const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
 const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

 const handleNextPage = () => { if (currentPage < totalPages) setCurrentPage((prev) => prev + 1); };
 const handlePrevPage = () => { if (currentPage > 1) setCurrentPage((prev) => prev - 1); };

 return (
  <div className="min-h-screen px-8 pt-12 sm:pt-16 md:pt-20 scroll-smooth max-w-5xl mx-auto">
   <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold mb-4">{title}</h1>
   <p className="text-gray-600 mb-12">{desc}</p>

   <div className="flex flex-col">
    {currentPosts.map((post, index) => (
     <div key={post.slug}>
      <BlogCardPreview {...post} lang={lang} />
      {index < currentPosts.length - 1 && (
       <hr className="my-8 border-gray-200" />
      )}
     </div>
    ))}
   </div>

   {totalPages > 1 && (
    <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-6">
     <button
      onClick={handlePrevPage} disabled={currentPage === 1}
      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
     >
      {prevText}
     </button>

     <span className="text-sm text-gray-600">
      {pageOfText} {totalPages}
     </span>

     <button
      onClick={handleNextPage} disabled={currentPage === totalPages}
      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
     >
      {nextText}
     </button>
    </div>
   )}
  </div>
 );
}