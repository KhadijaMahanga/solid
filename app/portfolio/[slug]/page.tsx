import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProjectBySlug, getAllProjects } from '@/lib/portfolio';
import ImageGallery from '@/components/ImageGallery';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return getAllProjects().map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return {
    title: `${project.title} | Kike Africa Portfolio`,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="py-16 max-w-3xl mx-auto px-4">
      <Link href="/portfolio" className="inline-flex items-center text-primary hover:underline mb-6">
        ← Back to Portfolio
      </Link>

      <div className="flex items-center gap-3">
        {project.client && (
          <span className="text-sm text-primary font-medium">{project.client}</span>
        )}
        {project.status === 'coming-soon' && (
          <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 font-medium">
            Coming Soon
          </span>
        )}
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{project.title}</h1>

      <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400 mb-8 border-b pb-6">
        <time>{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        {project.tags?.map(tag => (
          <span key={tag} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
            {tag}
          </span>
        ))}
      </div>

      {project.image && (
        <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden mb-10">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>
      )}

      {project.results && project.results.length > 0 && (
        <div className="bg-primary/5 rounded-lg p-6 mb-10">
          <h2 className="text-lg font-bold mb-3">
            {project.status === 'coming-soon' ? 'What to expect' : 'Results'}
          </h2>
          <ul className="space-y-2">
            {project.results.map(result => (
              <li key={result} className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary">
        <MDXRemote source={project.content} components={{ ImageGallery }} />
      </div>

      {project.link && (
        <div className="mt-10">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline font-medium"
          >
            View live project →
          </a>
        </div>
      )}

      <div className="mt-12 pt-8 border-t text-center bg-primary/5 rounded-lg p-8">
        <h2 className="text-xl font-bold mb-2">Have a similar problem to solve?</h2>
        <p className="text-body-color dark:text-body-color-dark mb-4">
          We build automation, web, and data tools like this one. Let&apos;s talk about yours.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90"
        >
          Get in touch
        </Link>
      </div>

      <div className="mt-8">
        <Link href="/portfolio" className="text-primary hover:underline">
          ← See more work
        </Link>
      </div>
    </article>
  );
}
