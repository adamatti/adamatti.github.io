export interface Technology {
  id: number;
  image: string;
  color: string;
  name: string;
  tags: string[];
  since: string;
}

export interface Company {
  id: number;
  name: string;
  logo?: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  results?: string;
  description: string;
  keywords: string[];
}

export interface Job {
  id: number;
  agency?: Company;
  company?: Company;

  title: string;
  description: string;

  startDate: string;
  endDate?: string;
  period: {
    from: Date;
    to?: Date;
  };

  projects: Project[];
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  dateString: string;
  content: string;
  tags: string[];
}

export interface EventRecord {
  id: number;
  name: string;
  description: string;
  talk: string;
  date: string;
  tags: string[];
  links: Record<string, string>;
}

export interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  embedId: string;
  tags: string[];
}

export interface PetProject {
  id: number;
  name: string;
  url: string;
  description: string;
  createdAt: string;
  language: string;
  topics: string[];
}
