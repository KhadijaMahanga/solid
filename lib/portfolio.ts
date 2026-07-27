import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { PortfolioProject } from '@/types/portfolio';

const portfolioDir = path.join(process.cwd(), 'content/portfolio');

function sortTier(project: Omit<PortfolioProject, 'content'>): number {
  if (project.featured) return 0;
  if (project.status === 'coming-soon') return 2;
  return 1;
}

export function getAllProjects(): Omit<PortfolioProject, 'content'>[] {
  const files = fs.readdirSync(portfolioDir);
  return files
    .filter(f => f.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace('.mdx', '');
      const fullPath = path.join(portfolioDir, file);
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
      return { slug, ...data } as Omit<PortfolioProject, 'content'>;
    })
    .sort((a, b) => {
      const tierDiff = sortTier(a) - sortTier(b);
      if (tierDiff !== 0) return tierDiff;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getProjectBySlug(slug: string): PortfolioProject {
  const fullPath = path.join(portfolioDir, `${slug}.mdx`);
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'));
  return { slug, ...data, content } as PortfolioProject;
}
