'use client';
import hdate from 'human-date';
import Link from 'next/link';
import { type ReactElement, useEffect, useState } from 'react';
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
      className={`w-full rounded-lg border bg-white py-2 shadow-md transition-colors duration-300 duration-500 hover:scale-105 sm:w-40 dark:border-gray-700 dark:bg-gray-800 ${color}`}
    >
      <Image
        alt={t.name}
        className="mx-auto"
        height={80}
        src={`/assets/icons/${t.image}`}
        width={80}
      />
      <p className="mt-4 capitalize">{addLink ? nameWithLink : t.name}</p>
      <p>{hdate.relativeTime(t.since).replaceAll(' ago', '')}</p>
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
            setFiltered(items);
          } else {
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
        <div className="flex justify-between">
          <div />
          <div className="grid grid-cols-7 gap-1">
            <FilterButton isShowAll={true} key="all" label="all" />

            {tags.map((t) => (
              <FilterButton isShowAll={false} key={t} label={t} />
            ))}
          </div>
        </div>
      )}
      <div className="flex w-auto flex-wrap justify-center gap-8 px-12 py-8 text-center sm:px-0">
        {filtered?.map((i) => (
          <TechCard addLink={addLinks} key={i.id} tech={i} />
        ))}
      </div>
    </>
  );
}
