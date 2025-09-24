import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

type ProjectProps = {
 name: string;
 description: string;
 image: string;
 href: string;
 stack?: string[];
};

export default function Project({
 name,
 description,
 image,
 href,
 stack
}: ProjectProps) {
 return (
  <a
   className="group/card grid md:grid-cols-8 gap-x-8 gap-y-4 p-4 rounded-lg hover:bg-slate-800/50 cursor-pointer transition-all duration-300"
   href={href}
   target="_blank"
   rel="noopener noreferrer"
  >
   <div className="md:col-span-2 mt-1">
    <Image
     src={`/images/${image}.png`}
     alt={`Screenshot of ${name}`}
     width={200}
     height={112}
     className="object-cover rounded border-2 border-slate-200/10 transition group-hover/card:border-slate-200/30 max-h-16"
    />
   </div>

   <div className="md:col-span-6 flex flex-col">
    <h3 className="text-white font-semibold tracking-wide group-hover/card:text-teal-300 transition-colors duration-300">
     {name}
     <ArrowUpRight
      className="inline-block h-4 w-4 mb-1 ml-1 text-slate-200 transition-transform duration-300 transform-gpu group-hover/card:translate-x-1 group-hover/card:-translate-y-1 group-hover/card:text-teal-300"
     />
    </h3>
    <p className="text-slate-400 tracking-wide text-sm mt-2">
     {description}
    </p>
    <div className="flex flex-wrap gap-2 mt-3">
     {stack?.map((item, index) => (
      <span
       key={index}
       className="text-xs sm:text-sm bg-teal-900/80 text-teal-300 px-3 py-1 rounded-full"
      >
       {item}
      </span>
     ))}
    </div>
   </div>
  </a>
 );
}