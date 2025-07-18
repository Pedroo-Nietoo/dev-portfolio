import { ArrowUpRight } from 'lucide-react';

type ExperienceProps = {
 from: string;
 to: string;
 company: string;
 position: string;
 description: string;
 href?: string;
 stack?: string[];
};

export default function Experience({
 from,
 to,
 company,
 position,
 description,
 href,
 stack,
}: ExperienceProps) {
 return (
  <a
   className="group/card grid md:grid-cols-8 gap-x-8 gap-y-4 p-4 rounded-lg hover:bg-slate-800/50 cursor-pointer transition-all duration-300"
   href={href}
   target="_blank"
   rel="noopener noreferrer"
  >
   <header className="md:col-span-2 text-sm text-slate-500 font-semibold uppercase tracking-wide whitespace-nowrap mt-1">
    {from} — {to}
   </header>

   <div className="md:col-span-6 flex flex-col pl-6">
    <h3 className="text-white font-semibold tracking-wide group-hover/card:text-teal-300 transition-colors duration-300">
     {position} · {company}
     <ArrowUpRight
      className="inline-block h-4 w-4 mb-1 ml-1 text-slate-200 transition-transform duration-300 transform-gpu group-hover/card:translate-x-1 group-hover/card:-translate-y-1 group-hover/card:text-teal-300"
     />
    </h3>
    <p className="text-slate-400 tracking-wide text-sm mt-2">{description}</p>
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
