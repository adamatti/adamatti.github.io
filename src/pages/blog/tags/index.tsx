import Link from 'next/link';
import type { ReactElement } from 'react';
import { getTags } from '~/server/blog-posts';

interface PageProps {
	tags: Record<string, number>;
}

function ShowTag({ tag, count }: { tag: string; count: number }): ReactElement {
	return (
		<div className="border border-slate-200 p-4 rounded-md shadow-md bg-white">
			<Link href={`/blog/tags/${tag}`} className="link">
				<h2 className="font-bold">{tag}</h2>
			</Link>
			<p>Posts: {count}</p>
		</div>
	);
}

export function getStaticProps(): { props: PageProps } {
	return {
		props: {
			tags: getTags(),
		},
	};
}

export default function TagPages({ tags }: PageProps): ReactElement {
	return (
		<>
			<div className="my-3">
				Note: consider this page as a MVP, I still want to improve the style
			</div>
			{Object.entries(tags)
				.sort((a, b) => (a[0] > b[0] ? 1 : -1))
				.map(([tag, count]) => (
					<ShowTag key={tag} tag={tag} count={count} />
				))}
		</>
	);
}
