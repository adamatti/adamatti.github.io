import Link from 'next/link';
import type { ReactElement } from 'react';
import type { Company, Job } from '~/types';
import Image from '../next-custom/image';

export default function CompanyLogos({ job }: { job: Job }): ReactElement {
	const companies: Company[] = [job.agency, job.company].filter(
		(i) => i?.logo,
	) as Company[];

	if (!companies || companies.length === 0) {
		return (
			<Image
				src="/assets/logos/empty.png"
				alt="no logo"
				width={48}
				height={48}
			/>
		);
	}

	return (
		<>
			{companies.map((c: Company) => {
				return (
					<Link key={c.id} href={c.url} target="_blank">
						<Image
							key={c.id}
							src={`/assets/logos/${c.logo ?? ''}`}
							alt={c.name}
							width={48}
							height={48}
						/>
					</Link>
				);
			})}
		</>
	);
}
