"use client";

import { LinkBlock } from "@/components/links/LinkBlock";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
 return (
  <div
   className="min-h-screen px-6 sm:px-12 md:px-20 lg:px-40 xl:px-60 pt-12 sm:pt-16 md:pt-20 scroll-smooth"
  >
   <div className="flex flex-col gap-4 items-center justify-center text-center">
    <img
     src="https://github.com/Pedroo-Nietoo.png"
     alt="GitHub profile image"
     className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full border border-white/20 mb-2 sm:mb-4"
    />
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
     Pedro Nieto
    </h1>
    <h3 className="text-base sm:text-lg md:text-xl font-medium text-slate-300">
     Desenvolvedor de Software  | @Pedroo-Nietoo
    </h3>

    <div className="flex gap-4 sm:gap-6 mt-3 sm:mt-4 justify-center">
     <a
      href="https://github.com/Pedroo-Nietoo"
      target="_blank"
      rel="noopener noreferrer"
     >
      <Github className="size-5 sm:size-6 text-slate-500 hover:text-slate-200 transition-all duration-300" />
     </a>
     <a
      href="https://www.linkedin.com/in/pedroo-nietoo/"
      target="_blank"
      rel="noopener noreferrer"
     >
      <Linkedin className="size-5 sm:size-6 text-slate-500 hover:text-slate-200 transition-all duration-300" />
     </a>
    </div>
   </div>

   <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col gap-4 sm:gap-6 items-center justify-center">
    <LinkBlock
     text="Template do Notion - Planejamento Financeiro"
     url="https://www.notion.so/templates/financial-planning"
    />
    <LinkBlock
     text="Prisma Schema Docs"
     url="https://www.npmjs.com/package/prisma-schema-docs"
    />
    <LinkBlock
     text="Node.js Logger"
     url="https://www.npmjs.com/package/pn-logger"
    />
   </div>
  </div>
 );
}