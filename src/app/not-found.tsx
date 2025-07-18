import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Custom404() {
 return (
  <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0f172a] text-slate-200 px-4 text-center">
   <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
    404 | Page Not Found
   </h1>

   <span className="text-sm sm:text-base text-slate-400 mb-6 max-w-md">
    Looks like the page you are looking for doesn&apos;t exist.
   </span>

   <Link
    href="/"
    className="text-white font-semibold cursor-pointer hover:text-teal-300 duration-300 group flex items-center mt-6 sm:mt-10"
   >
    <ArrowLeft className="inline h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
    <span>Back to Home</span>
   </Link>
  </div>
 );
}
