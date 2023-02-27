import { useState, type ChangeEvent, type ReactElement } from 'react';
import ShowTechs from '~/components/show-techs';
import { type Technology } from '../../types';
import { query } from '~/server/graphql';

export async function getStaticProps(): Promise<{ props: { items: Technology[] } }> {
  const q = `items:allTeches(sortField: "since", sortOrder: "desc") {
    id name color image tags since
  }`;

  const { items } = await query(q);

  return {
    props: {
      items,
    },
  };
}

export default function TechPage({ items }: { items: Technology[] }): ReactElement {
  const [filtered, setFiltered] = useState(items);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const filter = event.target.value.toLocaleLowerCase();

    const filterLogic = (t: Technology): boolean => {
      return t.name.toLocaleLowerCase().includes(filter);
    };

    const newFiltered = filter ? items.filter(filterLogic) : items;
    setFiltered(newFiltered);
  };

  return (
    <>
      <div className="w-full h-auto">
        <div className="mx-auto p-4 flex flex-col justify-center w-auto h-auto">
          <div>
            <p className="text-4xl font-bold inline">Experience</p>
            <div className="py-5">
              <p>These are the technologies I have worked with. </p>
              <p>
                Frameworks (e.g. express, ktor, spring), tecniques (e.g. TDD, BDD, Microservices, Event Sourcing),
                methodologies (e.g. kanban, scrum) aren't listed here (I mean, as cards)
              </p>
              <input
                type="text"
                placeholder="Filter here"
                className="input input-bordered w-full mt-5"
                onChange={handleChange}
              />
            </div>
          </div>
          <ShowTechs items={filtered} filters={true} />
        </div>
      </div>
    </>
  );
}
