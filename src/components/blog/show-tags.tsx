import Link from 'next/link';
import type { ReactElement } from 'react';

export default function ShowTags({ tags }: { tags: string[] }): ReactElement {
	if (!tags) {
		return <></>;
	}
	return (
		<>
			{' '}
			- [
			{tags.map((t, index) => {
				return (
					<>
						{index > 0 && ', '}
						<Link key={t} href={`/blog/tags/${t}`}>
							{t}
						</Link>
					</>
				);
			})}
			]
		</>
	);
}
