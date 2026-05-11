import type { ReactElement } from 'react';
import { ShowJobs } from '~/components/jobs/show-jobs';
import type { Job } from '~/types';
import { Section } from './section';

export function CompanyListSection({ jobs }: { jobs: Job[] }): ReactElement {
  return (
    <Section title="Experience">
      <ShowJobs jobs={jobs} />
      <div className="font-bold">Previous companies were omitted here</div>
    </Section>
  );
}
