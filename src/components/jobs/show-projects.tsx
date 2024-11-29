import type { ReactElement } from 'react';
import type { Job, Project } from '~/types';

export default function ShowProjects({
	job,
	filter,
}: { job: Job; filter?: string }): ReactElement {
	if (!job.projects || job.projects.length === 0) {
		return <></>;
	}

	let projects = job.projects;

	if (filter) {
		projects = projects.filter((p) =>
			JSON.stringify(p).toLowerCase().includes(filter),
		);
	}

	return (
		<div>
			<p className="font-bold">Projects:</p>
			<div>
				{projects.map((p: Project) => {
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
							<div className="align-text-bottom text-sm text-gray-500">
								{p.keywords.join(', ')}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
