import Link from 'next/link';
import type { ReactElement } from 'react';
import { getTags } from '~/server/blog-posts';

type PageProps = {
  tags: Record<string, number>;
};

function ShowTag({ tag, count }: { tag: string; count: number }): ReactElement {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4 shadow-md transition-colors duration-300 dark:border-slate-700 dark:bg-gray-800">
      <Link className="link" href={`/blog/tags/${tag}`}>
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
      <div className="my-3 text-slate-500 text-sm italic dark:text-slate-400">
        Note: consider this page as a MVP, I still want to improve the style
      </div>
      {Object.entries(tags)
        .sort((a, b) => (a[0] > b[0] ? 1 : -1))
        .map(([tag, count]) => (
          <ShowTag count={count} key={tag} tag={tag} />
        ))}
    </>
  );
}
