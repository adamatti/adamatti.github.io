import type { ReactElement } from 'react';
import type { Job, Project } from '~/types';

export default function ShowProjects({
  job,
  filter,
}: {
  job: Job;
  filter?: string;
}): ReactElement | null {
  if (!job.projects || job.projects.length === 0) {
    return null;
  }

  let projects = job.projects;

  if (filter) {
    projects = projects.filter((p) =>
      JSON.stringify(p).toLowerCase().includes(filter)
    );
  }

  return (
    <div>
      {/*<p className="font-bold">Projects:</p>*/}
      <div>
        {projects.map((p: Project) => {
          return (
            <div
              className="flex flex-col gap-2 py-1 sm:grid sm:grid-cols-[auto_200px]"
              key={p.id}
            >
              <div>
                <div className="font-semibold underline">{p.title}</div>
                <div>
                  <div className="text-sm sm:text-base">{p.description}</div>
                  {p.results && (
                    <div className="mt-1 flex flex-col gap-0 sm:flex-row sm:gap-1">
                      <div className="font-semibold text-sm sm:text-base">
                        Results:
                      </div>
                      <div className="text-sm italic sm:text-base">
                        {p.results}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="align-text-bottom text-gray-500 text-xs italic sm:text-sm sm:not-italic">
                {p.keywords.join(', ')}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
