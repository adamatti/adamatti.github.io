'use client';
import { type ReactElement, useState } from 'react';
import hdate from 'human-date';
import { type Technology } from '~/types';
import Image from './next-custom/image';

function TechCard({ tech: t }: { tech: Technology }): ReactElement {
  const color = `shadow-${t.color ?? 'black-500'}`;

  return (
    <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${color}`}>
      <Image className="mx-auto" src={`/icons/${t.image}`} alt={t.name} width={80} height={80} />
      <p className="mt-4 capitalize">{t.name}</p>
      <p>{hdate.relativeTime(t.since).replaceAll(' ago', '')}</p>
    </div>
  );
}

export default function ShowTechs({ items, filters = true }: { items: Technology[]; filters: boolean }): ReactElement {
  const tags = ['loved', 'language', 'database', 'tool', 'broker', 'frontend'];
  // const defaultItems = items.filter((i) => i.tags.includes('loved'));
  const [filtered, setFiltered] = useState(items);
  const [filterSelected, setFilterSelected] = useState('all');

  function FilterButton({ label, isShowAll = false }: { label: string; isShowAll: boolean }): ReactElement {
    const buttonClass = 'hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded';

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
      >
        {label}
      </button>
    );
  }

  return (
    <>
      {filters && (
        <div className="flex justify-between">
          <div></div>
          <div className="grid grid-cols-7 gap-1">
            <FilterButton key="all" label="all" isShowAll={true} />

            {tags.map((t) => (
              <FilterButton key={t} label={t} isShowAll={false} />
            ))}
          </div>
        </div>
      )}
      <div className="w-auto grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
        {filtered?.map((i) => (
          <TechCard key={i.id} tech={i} />
        ))}
      </div>
    </>
  );
}
