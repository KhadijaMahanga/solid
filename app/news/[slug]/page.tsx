import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import ImageGallery from '@/components/ImageGallery';
import type { Metadata } from 'next';

// Generate static paths for all articles
export function generateStaticParams() {
  return getAllArticles().map(article => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  return {
    title: `${article.title} | Kike Habari`,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt }
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article className="py-16 max-w-3xl mx-auto px-4">
      <Link href="/news" className="inline-flex items-center text-primary hover:underline mb-6">
        ← Back to News
      </Link>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
      
      <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400 mb-8 border-b pb-6">
        <time>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        {article.author && <span>By {article.author}</span>}
      </div>

      {article.image && (
        <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden mb-10">
          <Image src={article.image} alt={article.title} fill className="object-cover" />
        </div>
      )}

      {/* ✅ MDX renders your imports & JSX natively */}
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary">
        <MDXRemote 
          source={article.content} 
          components={{ ImageGallery }} 
        />
      </div>

      <div className="mt-12 pt-6 border-t">
        <Link href="/news" className="text-primary hover:underline">
          ← Read more articles
        </Link>
      </div>
    </article>
  );
}