import Link from 'next/link';
import Image from 'next/image';
import { getAllProjects } from '@/lib/portfolio';
import SectionTitle from '@/components/SectionTitle';

export const metadata = {
  title: 'Portfolio | Kike Africa',
  description: "Automation, web, and data projects we've delivered for clients.",
};

export default function PortfolioPage() {
  const projects = getAllProjects();

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Work"
          paragraph="Automation, web, and data projects we've built to solve real problems for real clients."
          center
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map(project => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {project.image && (
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between gap-2">
                  {project.client && (
                    <span className="text-sm text-black font-medium">{project.client}</span>
                  )}
                  {project.status === 'coming-soon' && (
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 font-medium">
                      Coming Soon
                    </span>
                  )}
                  {project.featured && (
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition">
                  {project.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark line-clamp-3">
                  {project.summary}
                </p>
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
