import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src/content');

export async function getPosts(lang: 'pt' | 'en') {
 const dir = path.join(contentDir, lang);

 if (!fs.existsSync(dir)) return [];

 const files = fs.readdirSync(dir);

 const posts = files.map((filename) => {
  const filePath = path.join(dir, filename);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data } = matter(fileContent);

  return {
   slug: filename.replace('.mdx', ''),
   ...(data as { title: string; description: string; date: string; author: string; categories: string[]; image: string }),
  };
 });

 return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string, lang: 'pt' | 'en') {
 const filePath = path.join(contentDir, lang, `${slug}.mdx`);
 const fileContent = fs.readFileSync(filePath, 'utf-8');
 const { data, content } = matter(fileContent);

 return {
  frontmatter: data,
  content,
 };
}