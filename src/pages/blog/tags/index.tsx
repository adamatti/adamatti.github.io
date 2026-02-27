import Link from 'next/link';
import type { ReactElement } from 'react';
import { getTags } from '~/server/blog-posts';

interface PageProps {
	tags: Record<string, number>;
}

function ShowTag({ tag, count }: { tag: string; count: number }): ReactElement {
	return (
		<div className="border border-slate-200 dark:border-slate-700 p-4 rounded-md shadow-md bg-white dark:bg-gray-800 transition-colors duration-300">
			<Link href={`/blog/tags/${tag}`} className="link">
				<h2 className="font-bold">{tag}</h2>
			</Link>
			<p className="text-slate-700 dark:text-slate-300">Posts: {count}</p>
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
			<div className="my-3 text-sm text-slate-500 dark:text-slate-400 italic">
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
