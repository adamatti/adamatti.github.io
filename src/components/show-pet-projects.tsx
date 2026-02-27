import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import type { ReactElement } from 'react';
import type { PetProject } from '~/types';

function ShowTags({ project: p }: { project: PetProject }): ReactElement {
  const tags: string[] = [p.language?.toLocaleLowerCase(), ...p.topics]
    .filter((i) => !!i)
    .filter((e, index, self) => index === self.indexOf(e)); // remove duplicates
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((t) => (
        <div
          className="bordered whitespace-nowrap rounded bg-cyan-500 px-2 py-0.5 font-medium text-[10px] text-white"
          key={t}
        >
          {t}
        </div>
      ))}
    </div>
  );
}

function PetProjectCard({ project: p }: { project: PetProject }): ReactElement {
  return (
    <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-col">
        <div className="mb-2">
          <Link
            className="link no-underline hover:underline"
            href={p.url}
            target="_blank"
          >
            <h2 className="font-bold text-gray-900 text-xl uppercase tracking-tight dark:text-white">
              {p.name}
            </h2>
          </Link>
          <p className="mt-1 text-gray-500 text-xs dark:text-gray-400">
            {p.createdAt}
          </p>
        </div>
        <div className="mt-2 text-gray-700 text-sm leading-relaxed dark:text-gray-300">
          <Markdown>{p.description ?? ''}</Markdown>
        </div>
        <ShowTags project={p} />
      </div>
    </div>
  );
}

export default function ShowPetProjects({
  projects,
}: {
  projects: PetProject[];
}): ReactElement {
  return (
    <div className="py-6">
      {projects.map((p) => (
        <PetProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
