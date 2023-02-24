import { useState, type ChangeEvent, type ReactElement } from 'react';
import { ShowJobs } from '~/components/jobs/show-jobs';
import { query } from '~/server/graphql';
import { type Job } from '~/types';

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
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [filter, setFilter] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const textFilter = event.target.value.toLocaleLowerCase();

    const filterLogic = (j: Job): boolean => {
      // FIXME improve it, doing full text search today
      return JSON.stringify(j).toLocaleLowerCase().includes(textFilter);
    };

    setFilter(textFilter);
    setFilteredJobs(textFilter ? jobs.filter(filterLogic) : jobs);
  };
  return (
    <>
      <div>
        <input type="text" placeholder="Filter here" className="input input-bordered w-full" onChange={handleChange} />
        <div className="text-xl py-5">List of all my previous jobs. Total: {jobs.length}</div>
        <ShowJobs jobs={filteredJobs} filter={filter} />
      </div>
    </>
  );
}
