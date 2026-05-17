import Link from 'next/link';
import Image from 'next/image';
import { getAllArticles } from '@/lib/articles';
import SectionTitle from '@/components/SectionTitle';

export default function NewsPage() {
  const articles = getAllArticles();

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Kike Habari"
          paragraph="Latest news, events, and insights from our team."
          center
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {articles.map(article => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {article.image && (
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition">
                  {article.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}