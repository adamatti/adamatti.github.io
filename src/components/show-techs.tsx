'use client';
import hdate from 'human-date';
import Link from 'next/link';
import { type ReactElement, useEffect, useState } from 'react';
import { emitAnalyticsEvent } from '~/analytics/analytics';
import type { Technology } from '~/types';
import Image from './next-custom/image';

function TechCard({
  tech: t,
  addLink = false,
}: {
  tech: Technology;
  addLink: boolean;
}): ReactElement {
  const color = `shadow-${t.color ?? 'black-500'}`;
  const nameWithLink = (
    <Link
      className="text-inherit dark:text-white"
      href={`/technologies/${t.name.toLocaleLowerCase()}`}
    >
      {t.name}
    </Link>
  );

  return (
    <div
      className={`grid w-full grid-cols-[48px_auto] items-center gap-4 py-2 sm:block sm:w-40 sm:rounded-lg sm:border sm:bg-white sm:shadow-md sm:transition-all sm:duration-300 sm:hover:scale-105 dark:sm:border-gray-700 dark:sm:bg-gray-800 ${color}`}
    >
      <div className="flex h-12 w-12 items-center justify-center sm:mx-auto sm:h-20 sm:w-20">
        <Image
          alt={t.name}
          className="h-12 w-12 sm:h-20 sm:w-20"
          src={`/assets/icons/${t.image}`}
        />
      </div>
      <div className="text-left sm:mt-4 sm:text-center">
        <p className="font-semibold capitalize sm:text-base">
          {addLink ? nameWithLink : t.name}
        </p>
        <p className="text-gray-500 text-sm sm:text-gray-900 dark:text-white">
          {hdate.relativeTime(t.since).replaceAll(' ago', '')}
        </p>
      </div>
    </div>
  );
}

export default function ShowTechs({
  items,
  filters = true,
  addLinks = false,
}: {
  items: Technology[];
  filters: boolean;
  addLinks?: boolean;
}): ReactElement {
  const tags = ['love', 'language', 'database', 'tool', 'broker', 'frontend'];
  // const defaultItems = items.filter((i) => i.tags.includes('loved'));
  const [filtered, setFiltered] = useState(items);
  const [filterSelected, setFilterSelected] = useState('all');

  useEffect(() => {
    if (filterSelected === 'all') {
      setFiltered(items);
    } else {
      setFiltered(items.filter((i) => i.tags.includes(filterSelected)));
    }
  }, [items, filterSelected]);

  function FilterButton({
    label,
    isShowAll = false,
  }: {
    label: string;
    isShowAll: boolean;
  }): ReactElement {
    const buttonClass =
      'hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded';

    return (
      <button
        className={`${filterSelected === label ? 'bg-cyan-600' : 'bg-cyan-400'} ${buttonClass}`}
        onClick={() => {
          if (isShowAll) {
            emitAnalyticsEvent('filter_techs', { filter: 'all' });
            setFiltered(items);
          } else {
            emitAnalyticsEvent('filter_techs', { filter: label });
            setFiltered(items.filter((i) => i.tags.includes(label)));
          }

          setFilterSelected(label);
        }}
        type="button"
      >
        {label}
      </button>
    );
  }

  return (
    <>
      {filters && (
        <div className="flex flex-wrap justify-center gap-2">
          <FilterButton isShowAll={true} key="all" label="all" />

          {tags.map((t) => (
            <FilterButton isShowAll={false} key={t} label={t} />
          ))}
        </div>
      )}
      <div className="flex flex-col gap-2 py-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8 sm:px-0 sm:py-8 sm:text-center">
        {filtered?.map((i) => (
          <TechCard addLink={addLinks} key={i.id} tech={i} />
        ))}
      </div>
    </>
  );
}
