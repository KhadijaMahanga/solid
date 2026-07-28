export type PortfolioProject = {
  slug: string;
  title: string;
  date: string;
  client?: string;
  summary: string;
  image?: string;
  tags?: string[];
  results?: string[];
  link?: string;
  status?: 'coming-soon';
  featured?: boolean;
  content: string;
};
