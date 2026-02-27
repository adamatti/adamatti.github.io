import Link from 'next/link';
import type { ReactElement } from 'react';
import { technologiesToList } from '~/config';

function ShowList({ category }: { category: string }): ReactElement {
  const list: string[] = technologiesToList
    .filter((t) => t.category === category && t.show !== false)
    .map((t) => t.key)
    .sort();

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {list.map((i) => (
        <Link
          className="rounded-full bg-cyan-100 px-3 py-1 font-semibold text-cyan-700 text-xs no-underline transition-colors duration-200 hover:bg-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:hover:bg-cyan-900/50"
          href={`/technologies/${i}`}
          key={i}
        >
          {i}
        </Link>
      ))}
    </div>
  );
}

export default function AllPage(): ReactElement {
  const categories: string[] = technologiesToList
    .reduce((list: string[], t) => {
      const key = t.category ?? 'Others';
      if (!list.includes(key)) {
        return [...list, key];
      }
      return list;
    }, [] as string[])
    .sort();

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 gap-6 px-4 sm:px-0 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <div
            className="card border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            key={c}
          >
            <div className="card-body p-6">
              <h2 className="card-title mb-2 border-gray-100 border-b pb-2 font-bold text-gray-900 text-sm uppercase tracking-wider dark:border-gray-700 dark:text-white">
                {c}
              </h2>
              <ShowList category={c} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
