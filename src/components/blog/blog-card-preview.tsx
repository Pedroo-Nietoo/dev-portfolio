import Link from "next/link";

type BlogCardPreviewProps = {
 slug: string;
 image: string;
 title: string;
 description: string;
 date: string;
 author: string;
 categories: string[];
};

export default function BlogCardPreview({
 slug,
 image,
 title,
 description,
 date,
 author,
 categories,
}: BlogCardPreviewProps) {
 const truncatedDescription =
  description.length > 300 ? `${description.slice(0, 197).trimEnd()}...` : description;

 return (
  <div className="flex flex-col md:flex-row gap-6">
   {/* Imagem clicável */}
   <Link href={`/blog/${slug}`} className="shrink-0">
    <img
     className="w-full md:w-[320px] object-cover hover:opacity-90 transition-opacity"
     src={image}
     alt={`${title} cover`}
    />
   </Link>

   <div className="flex flex-col gap-1">
    {/* Título clicável com a cor azul da AWS */}
    <Link href={`/blog/${slug}`}>
     <h2 className="text-[#00529B] font-bold text-lg hover:underline leading-tight">
      {title}
     </h2>
    </Link>

    {/* Metadados (Autor, Data, Categorias) */}
    <div className="text-sm text-gray-600 mt-1 mb-2">
     <span>by {author}</span>
     <span className="mx-2">|</span>
     <span>on {date}</span>
     <span className="mx-2">|</span>
     <span>
      in{" "}
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

    {/* Descrição */}
    <p className="text-gray-800 text-sm leading-relaxed">{truncatedDescription}</p>
   </div>
  </div>
 );
}