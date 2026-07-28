import type { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles';
import { getAllProjects } from '@/lib/portfolio';

const baseUrl = 'https://kikeafrica.co.tz';

const staticRoutes = [
  '',
  '/news',
  '/services',
  '/portfolio',
  '/our-initiatives',
  '/our-initiatives/media-festival',
  '/our-initiatives/tech-talks',
  '/events',
  '/podcast',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const articleEntries: MetadataRoute.Sitemap = getAllArticles().map(article => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  const portfolioEntries: MetadataRoute.Sitemap = getAllProjects().map(project => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(project.date),
  }));

  return [...staticEntries, ...articleEntries, ...portfolioEntries];
}
