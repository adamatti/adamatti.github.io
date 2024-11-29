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
					key={t}
					className="bordered rounded bg-cyan-400 text-white w-20 text-center text-xs"
				>
					{t}
				</div>
			))}
		</div>
	);
}

function PetProjectCard({ project: p }: { project: PetProject }): ReactElement {
	return (
		<div className="border border-slate-200 p-4 rounded-md shadow-md bg-white">
			<div className="grid grid-cols-2">
				<div>
					<Link href={p.url} className="link" target="_blank">
						<h2 className="font-bold">{p.name}</h2>
					</Link>
					<p className="text-sm text-slate-400">{p.createdAt}</p>
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
}: { projects: PetProject[] }): ReactElement {
	return (
		<div>
			{projects.map((p) => (
				<PetProjectCard key={p.id} project={p} />
			))}
		</div>
	);
}
