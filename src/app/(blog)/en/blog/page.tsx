import BlogList from "@/components/blog/blog-list";
import { getPosts } from "@/lib/blog";

export default async function BlogPageEN() {
 const posts = await getPosts('en');
 return <BlogList posts={posts} lang="en" />;
}