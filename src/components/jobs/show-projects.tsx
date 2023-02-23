import { type ReactElement } from 'react';
import { type Job, type Project } from '~/types';

export default function ShowProjects({ job }: { job: Job }): ReactElement {
  if (!job.projects || job.projects.length === 0) {
    return <></>;
  }

  return (
    <div>
      <p className="font-bold">Projects:</p>
      <div>
        {job.projects.map((p: Project) => {
          return (
            <div key={p.id} className="grid grid-cols-[auto_200px] gap-2 py-1">
              <div>
                <div className="underline">{p.title}</div>
                <div>
                  <div>{p.description}</div>
                  {p.results && (
                    <div className="flex gap-1">
                      <div className="font-semibold">Results:</div>
                      <div>{p.results}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="align-text-bottom text-sm text-gray-500">{p.keywords.join(', ')}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
