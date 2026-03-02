export type Technology = {
  color: string;
  id: number;
  image: string;
  name: string;
  since: string;
  tags: string[];
};

export type Company = {
  id: number;
  logo?: string;
  name: string;
  url: string;
};

export type Project = {
  description: string;
  id: number;
  keywords: string[];
  results?: string;
  title: string;
};

export type Job = {
  agency?: Company;
  company?: Company;
  description: string;
  endDate?: string;
  id: number;
  period: {
    from: Date;
    to?: Date;
  };

  projects: Project[];

  startDate: string;

  title: string;
};

export type BlogPost = {
  content: string;
  dateString: string;
  slug: string;
  summary: string;
  tags: string[];
  title: string;
};

export type EventRecord = {
  date: string;
  description: string;
  id: number;
  links: Record<string, string>;
  name: string;
  tags: string[];
  talk: string;
};

export type Video = {
  description: string;
  embedId: string;
  id: number;
  tags: string[];
  title: string;
  url: string;
};

export type PetProject = {
  createdAt: string;
  description: string;
  id: number;
  language: string;
  name: string;
  topics: string[];
  url: string;
};
