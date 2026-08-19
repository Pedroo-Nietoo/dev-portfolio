import Link from "next/link";

type BlogCardPreviewProps = {
 slug: string;
 image: string;
 title: string;
 description: string;
 date: string;
 author: string;
 categories: string[];
 lang: 'pt' | 'en';
};

export default function BlogCardPreview({
 slug,
 image,
 title,
 description,
 date,
 author,
 categories,
 lang
}: BlogCardPreviewProps) {
 const dict = {
  pt: { by: "por", on: "em", in: "em" },
  en: { by: "by", on: "on", in: "in" }
 }[lang];

 const truncatedDescription = description.length > 300 ? `${description.slice(0, 197).trimEnd()}...` : description;
 const href = lang === 'pt' ? `/blog/${slug}` : `/en/blog/${slug}`;

 return (
  <div className="flex flex-col md:flex-row gap-6">
   <Link href={href} className="shrink-0">
    <img
     className="w-full md:w-[320px] object-cover hover:opacity-90 transition-opacity"
     src={image}
     alt={`${title} cover`}
    />
   </Link>

   <div className="flex flex-col gap-1">
    <Link href={href}>
     <h2 className="text-[#00529B] font-bold text-lg hover:underline leading-tight">
      {title}
     </h2>
    </Link>

    <div className="text-sm text-gray-600 mt-1 mb-2">
     <span>{dict.by} {author}</span>
     <span className="mx-2">|</span>
     <span>{dict.on} {date}</span>
     <span className="mx-2">|</span>
     <span>
      {dict.in}{" "}
      {categories.map((category, index) => (
       <span key={category}>
        <Link href="#" className="text-[#00529B] hover:underline">
         {category}
        </Link>
        {index < categories.length - 1 ? ", " : ""}
       </span>
      ))}
     </span>
    </div>

    <p className="text-gray-800 text-sm leading-relaxed">{truncatedDescription}</p>
   </div>
  </div>
 );
}