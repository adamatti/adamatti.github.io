import { type ReactElement } from 'react';
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
                methodologies (e.g. kanban, scrum) aren't listed here
              </p>
            </div>
          </div>
          <ShowTechs items={items} filters={true} />
        </div>
      </div>
    </>
  );
}
