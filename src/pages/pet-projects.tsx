import { type ChangeEvent, useState, type ReactElement } from 'react';
import ShowPetProjects from '~/components/show-pet-projects';
import { query } from '~/server/graphql';
import { type PetProject } from '~/types';

interface StaticPropsResult {
  petProjects: PetProject[];
}

export async function getStaticProps(): Promise<{ props: StaticPropsResult }> {
  const q = `
  petProjects:allPetProjects(sortField: "created_at", sortOrder: "desc") {
    id
    name
    url
    description
    createdAt:created_at
    language
    topics
  }`;

  const { petProjects } = await query(q);

  return {
    props: {
      petProjects,
    },
  };
}

export default function PetProjectsPage({ petProjects }: StaticPropsResult): ReactElement {
  const [filtered, setFiltered] = useState(petProjects);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const filter = event.target.value.toLocaleLowerCase();

    const filterLogic = (e: PetProject): boolean => {
      // TODO remove full scan
      return JSON.stringify(e).toLocaleLowerCase().includes(filter);
    };

    setFiltered(filter ? petProjects.filter(filterLogic) : petProjects);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter here"
        className="input input-bordered w-full mb-5"
        onChange={handleChange}
      />
      <ShowPetProjects projects={filtered} />;
    </div>
  );
}
