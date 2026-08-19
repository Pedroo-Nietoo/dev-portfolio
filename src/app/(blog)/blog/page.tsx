import BlogList from "@/components/blog/blog-list";
import { getPosts } from "@/lib/blog";

export default async function BlogPagePT() {
 const posts = await getPosts('pt');
 return <BlogList posts={posts} lang="pt" />;
}