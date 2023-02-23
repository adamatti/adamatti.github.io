import { ReactElement } from 'react';
import { ShowJobs } from '~/components/jobs/show-jobs';
import { query } from '~/server/graphql';
import { Job } from '~/types';

export async function getStaticProps(): Promise<{ props: { jobs: Job[] } }> {
  const q = `
    jobs:allJobs(filter: {show: true}) {
      id
      title
      description
      startDate
      endDate
      agency:Agency {
        id
        name
        logo
        url
      }
      company:Company {
        id
        name
        logo
        url
      }    
      projects:Projects {
        id
        title
        results
        description
        keywords
      }
    }`;

  const { jobs } = await query(q);

  return {
    props: {
      jobs,
    },
  };
}

export default function JobPage({ jobs }: { jobs: Job[] }): ReactElement {
  return (
    <div>
      <div className="text-xl">List of all my previous jobs. Total: {jobs.length}</div>
      <ShowJobs jobs={jobs} />
    </div>
  );
}
