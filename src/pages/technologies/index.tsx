import { type ChangeEvent, type ReactElement, useState } from 'react';
import ShowTechs from '~/components/show-techs';
import { query } from '~/server/graphql';
import type { Technology } from '../../types';

export async function getStaticProps(): Promise<{
  props: { items: Technology[] };
}> {
  const q = `items:allTeches(sortField: "since", sortOrder: "asc") {
    id name color image tags since
  }`;

  const { items } = await query(q);

  return {
    props: {
      items,
    },
  };
}

export default function TechPage({
  items,
}: {
  items: Technology[];
}): ReactElement {
  const [filtered, setFiltered] = useState(items);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const filter = event.target.value.toLocaleLowerCase();

    const filterLogic = (t: Technology): boolean => {
      return JSON.stringify(t).toLocaleLowerCase().includes(filter);
    };

    const newFiltered = filter ? items.filter(filterLogic) : items;
    setFiltered(newFiltered);
  };

  return (
    <div className="h-auto w-full">
      <div className="mx-auto flex h-auto w-auto flex-col justify-center p-4">
        <div>
          <p className="inline font-bold text-4xl">Experience</p>
          <div className="py-5">
            <p>These are the technologies I have worked with. </p>
            <p>
              Frameworks (e.g. express, ktor, spring), tecniques (e.g. TDD, BDD,
              Microservices, Event Sourcing), methodologies (e.g. kanban, scrum)
              aren't listed here (I mean, as cards)
            </p>
            <input
              className="input input-bordered mt-5 w-full"
              onChange={handleChange}
              placeholder="Filter here"
              type="text"
            />
          </div>
        </div>
        <ShowTechs filters={true} items={filtered} />
      </div>
    </div>
  );
}
