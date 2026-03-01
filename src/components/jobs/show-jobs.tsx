import { format, formatDistance, parseISO } from 'date-fns';
import type { ReactElement } from 'react';
import type { Job } from '~/types';
import CompanyLogos from './company-logos';
import ShowProjects from './show-projects';

const fullFormat = false;

function JobDates({ job }: { job: Job }): ReactElement | string | number {
  const formatString = 'MMM yyyy';

  const formatDate = (date: string): string =>
    format(parseISO(date), formatString);

  const startDate = parseISO(job.startDate);
  const endDate = job.endDate ? parseISO(job.endDate) : new Date();
  const diff = formatDistance(endDate, startDate);

  if (fullFormat) {
    return (
      <>
        {formatDate(job.startDate)} -{' '}
        {job.endDate ? formatDate(job.endDate) : 'Current'} ({diff})
      </>
    );
  }

  if (startDate.getFullYear() === endDate.getFullYear()) {
    return startDate.getFullYear();
  }

  return `${startDate.getFullYear()} - ${endDate.getFullYear()}`;
}

function JobCard({ job }: { job: Job; filter?: string }): ReactElement {
  const companyName = job.agency
    ? `${job.agency.name} providing services to ${job.company?.name ?? 'secret'}`
    : job.company?.name;

  return (
    <div className="grid w-auto grid-cols-[40px_auto] gap-2 py-2">
      <div className="py-1">
        <CompanyLogos job={job} />
      </div>
      <div>
        <p className="font-bold">{job.title}</p>
        <p className="text-gray-500 text-sm">
          {companyName} - <JobDates job={job} />
        </p>
        <p>{job.description}</p>
        <div>
          <ShowProjects job={job} />
        </div>
      </div>
    </div>
  );
}

export function ShowJobs({
  jobs,
  filter,
}: {
  jobs: Job[];
  filter?: string;
}): ReactElement {
  return (
    <>
      {jobs?.map((j) => (
        <JobCard filter={filter} job={j} key={j.id} />
      ))}
    </>
  );
}
