import Link from 'next/link';
import type { ReactElement } from 'react';

export default function ShowTags({
  tags,
}: {
  tags: string[];
}): ReactElement | null {
  if (!tags || tags.length === 0) {
    return null;
  }
  return (
    <span className="ml-2 inline-flex flex-wrap gap-1.5 align-middle">
      {tags.map((t) => (
        <Link
          className="inline-flex items-center rounded-md bg-cyan-100 px-2 py-0.5 text-xs font-semibold text-cyan-800 transition-colors hover:bg-cyan-200 dark:bg-cyan-900/40 dark:text-cyan-300 dark:hover:bg-cyan-900/60"
          href={`/blog/tags/${t}`}
          key={t}
        >
          {t}
        </Link>
      ))}
    </span>
  );
}

