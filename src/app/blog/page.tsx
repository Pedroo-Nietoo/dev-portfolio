"use client";

import { useState } from "react";
import BlogCardPreview from "@/components/blog/blog-card-preview";

const POSTS = [
 {
  slug: "introducing-public-preview-runtimes",
  image: "https://d2908q01vomqb2.cloudfront.net/1b6453892473a467d07372d45eb05abc2031647a/2026/07/23/new-lambda-runtimes-featured-image.png",
  title: "Como o Itaú reduziu custos de armazenamento no Amazon S3",
  description: "Coordenadores, Gerentes e Engenheiros de Dados do Itaú Unibanco compartilharam como reduziram custos de armazenamento no Amazon S3 através da construção de sua Itaú Unibanco Plataforma de Dados em Prevenção a Fraudes, utilizando recursos como o S3 Intelligent-Tiering e a análise de ciclo de vida dos objetos. Eles detalharam as estratégias adotadas, os desafios enfrentados e os resultados alcançados, oferecendo insights valiosos para empresas que buscam otimizar seus gastos com armazenamento em nuvem.",
  date: "18 AGO 2026",
  author: "Pedro Henrique Nieto da Silva",
  categories: ["Architecture", "AWS S3"],
 },
];

const POSTS_PER_PAGE = 2;

export default function Home() {
 const [currentPage, setCurrentPage] = useState(1);

 const totalPages = Math.ceil(POSTS.length / POSTS_PER_PAGE);
 const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
 const currentPosts = POSTS.slice(startIndex, startIndex + POSTS_PER_PAGE);

 const handleNextPage = () => {
  if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
 };

 const handlePrevPage = () => {
  if (currentPage > 1) setCurrentPage((prev) => prev - 1);
 };

 return (
  <div className="min-h-screen px-8 pt-12 sm:pt-16 md:pt-20 scroll-smooth max-w-5xl mx-auto">
   <h1 className="text-4xl sm:text-5xl md:text-4xl font-bold mb-4">
    Personal Blog
   </h1>
   <p className="text-gray-600 mb-12">
    Where I share my thoughts, experiences, recent projects and more.
   </p>

   <div className="flex flex-col">
    {currentPosts.map((post, index) => (
     <div key={post.slug}>
      <BlogCardPreview {...post} />
      {index < currentPosts.length - 1 && (
       <hr className="my-8 border-gray-200" />
      )}
     </div>
    ))}
   </div>

   {totalPages > 1 && (
    <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-6">
     <button
      onClick={handlePrevPage}
      disabled={currentPage === 1}
      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
     >
      Previous
     </button>

     <span className="text-sm text-gray-600">
      Page {currentPage} of {totalPages}
     </span>

     <button
      onClick={handleNextPage}
      disabled={currentPage === totalPages}
      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
     >
      Next
     </button>
    </div>
   )}
  </div>
 );
}