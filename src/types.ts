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
