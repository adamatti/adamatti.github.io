import type { ReactElement } from 'react';
import ShowTechs from '~/components/show-techs';
import type { Technology } from '~/types';
import { Section } from './section';

export function TechnologyListSection({
  techs,
}: {
  techs: Technology[];
}): ReactElement {
  const lovedOnes = techs.filter((t) => t.tags.includes('love'));

  return (
    <Section title="Main Tech Skills">
      There are a lot of technologies that I still haven't the opportunity to
      work with professionally (e.g. clojure, elixir).
      <br />
      Those are the main ones that I am proficient and love to work with:
      <ShowTechs filters={false} items={lovedOnes} />
    </Section>
  );
}
