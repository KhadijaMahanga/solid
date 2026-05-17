import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDir = path.join(process.cwd(), 'content/articles');

export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author?: string;
  image?: string;
  tags?: string[];
  content: string;
}

export function getAllArticles(): Omit<Article, 'content'>[] {
  const files = fs.readdirSync(articlesDir);
  return files
    .filter(f => f.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace('.mdx', '');
      const fullPath = path.join(articlesDir, file);
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
      return { slug, ...data } as Omit<Article, 'content'>;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article {
  const fullPath = path.join(articlesDir, `${slug}.mdx`);
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'));
  return { slug, ...data, content } as Article;
}