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
  <a className="group flex p-4 gap-16 rounded-lg hover:bg-slate-800 cursor-pointer transition-colors duration-300" href={href} target="_blank" rel="noopener noreferrer">
   <span className="text-sm text-slate-500 font-bold whitespace-nowrap w-32 flex-shrink-0">
    {from} — {to}
   </span>
   <div className="flex flex-col">
    <h3 className="text-white font-semibold tracking-wide transition-colors duration-300 group-hover:text-teal-300">
     {position} · {company}
     <ArrowUpRight
      className="inline h-5 mb-1 ml-1 text-slate-300 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal-300"
     />
    </h3>
    <p className="text-slate-400 tracking-wide text-sm">
     {description}
    </p>
    <div className="flex flex-wrap gap-2 mt-3">
     {stack?.map((item, index) => (
      <span
       key={index}
       className="text-sm bg-teal-900 text-teal-300 px-3 py-1 rounded-full"
      >
       {item}
      </span>
     ))}
    </div>
   </div>
  </a>
 );
}
