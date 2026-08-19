import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug } from '@/lib/blog';
import Link from 'next/link';
import Callout from '@/components/blog/callout';
import { BlogImage } from '@/components/blog/blog-image';

const mdxComponents = {
 Callout: Callout,
 BlogImage: BlogImage,

 h2: (props: any) => (
  <h2 className="text-[28px] font-bold mt-12 mb-5 text-[#333]" {...props} />
 ),
 h3: (props: any) => (
  <h3 className="text-[22px] font-bold mt-10 mb-4 text-[#333]" {...props} />
 ),

 p: (props: any) => (
  <p className="text-[#222] text-[16px] leading-[1.625] mb-5" {...props} />
 ),

 a: (props: any) => (
  <a className="text-[#00529B] underline decoration-1 underline-offset-2 hover:text-[#003366] transition-colors" {...props} />
 ),

 strong: (props: any) => (
  <strong className="font-bold text-[#333]" {...props} />
 ),
 em: (props: any) => (
  <em className="italic text-[#222]" {...props} />
 ),

 ul: (props: any) => (
  <ul className="list-disc pl-10 mb-6 text-[#222] space-y-2" {...props} />
 ),
 ol: (props: any) => (
  <ol className="list-decimal pl-10 mb-6 text-[#222] space-y-2" {...props} />
 ),
 li: (props: any) => (
  <li className="leading-[1.625]" {...props} />
 ),
};

export default async function BlogPostTemplatePT({
 params
}: {
 params: Promise<{ slug: string }>
}) {
 const { slug } = await params;
 const post = await getPostBySlug(slug, 'pt');

 return (
  <article className="max-w-4xl mx-auto py-10 px-6 sm:px-8 font-sans">
   <div className="mb-8">
    <Link href="/blog" className="text-[#0972d3] text-[15px] font-medium">
     &larr; Voltar para o Blog
    </Link>
   </div>

   <div className="mb-2">
    <span className="text-[#0972d3] font-bold text-[14px] uppercase tracking-wide">
     O blog pessoal
    </span>
   </div>

   <h1 className="text-3xl md:text-[40px] font-extrabold text-[#333] mb-4 leading-[1.2]">
    {post.frontmatter.title}
   </h1>

   <div className="text-[15px] text-gray-600 mb-10 pb-6 border-b border-gray-200">
    <span>by {post.frontmatter.author}</span>
    <span className="mx-2">|</span>
    <span>on {post.frontmatter.date}</span>
    <span className="mx-2">|</span>
    <span>
     in{" "}
     {post.frontmatter.categories.map((category: string, index: number) => (
      <span key={category}>
       <Link href="#" className="text-[#0972d3]">
        {category}
       </Link>
       {index < post.frontmatter.categories.length - 1 ? ", " : ""}
      </span>
     ))}
    </span>
   </div>

   <div className="max-w-none">
    <MDXRemote source={post.content} components={mdxComponents} />
   </div>
  </article>
 );
}