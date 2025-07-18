import { ArrowUpRight } from 'lucide-react';

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
   className="group/project flex p-4 gap-8 rounded-lg hover:bg-slate-800 cursor-pointer transition-colors duration-300"
   href={href}
   target="_blank"
   rel="noopener noreferrer"
  >
   <img
    src={`/images/${image}.png`}
    alt={name}
    className="w-36 h-22 object-cover rounded-md"
   />
   <div className="flex flex-col">
    <h3 className="group/card text-white font-semibold tracking-wide transition-colors duration-300 hover:text-teal-300">
     {name}
     <ArrowUpRight
      className="inline h-5 mb-1 ml-1 text-slate-200 transition-all duration-300 transform group-hover/card:translate-x-1 group-hover/card:-translate-y-1 group-hover/card:text-teal-300"
     />
    </h3>
    <p className="text-slate-200 tracking-wide text-sm">
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
