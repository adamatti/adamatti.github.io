import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import type { ReactElement } from 'react';
import type { PetProject } from '~/types';

function ShowTags({ project: p }: { project: PetProject }): ReactElement {
  const tags: string[] = [p.language?.toLocaleLowerCase(), ...p.topics]
    .filter((i) => !!i)
    .filter((e, index, self) => index === self.indexOf(e)); // remove duplicates
  return (
    <div className="grid grid-cols-5 place-content-center gap-2">
      {tags.map((t) => (
        <div
          className="bordered w-20 rounded bg-cyan-400 text-center text-white text-xs"
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
    <div className="rounded-md border border-slate-200 bg-white p-4 shadow-md">
      <div className="grid grid-cols-2">
        <div>
          <Link className="link" href={p.url} target="_blank">
            <h2 className="font-bold">{p.name}</h2>
          </Link>
          <p className="text-slate-400 text-sm">{p.createdAt}</p>
          <p className="text-slate-700">
            <Markdown>{p.description ?? ''}</Markdown>
          </p>
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
    <div>
      {projects.map((p) => (
        <PetProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
