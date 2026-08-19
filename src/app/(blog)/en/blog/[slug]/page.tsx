import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug } from '@/lib/blog';
import Link from 'next/link';

const mdxComponents = {
 // Callout: Callout,
};

export default async function BlogPostTemplatePT({ params }: { params: { slug: string } }) {
 const post = await getPostBySlug(params.slug, 'en');

 return (
  <article className="max-w-3xl mx-auto py-12 px-8">
   <Link href="/blog" className="text-[#00529B] hover:underline mb-8 inline-block">
    &larr; Voltar para o Blog
   </Link>

   <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.frontmatter.title}</h1>
   <p className="text-gray-500 mb-12">
    {post.frontmatter.date} • por {post.frontmatter.author}
   </p>

   <div className="prose prose-blue prose-lg max-w-none">
    <MDXRemote source={post.content} components={mdxComponents} />
   </div>
  </article>
 );
}