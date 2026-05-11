import { compareAsc, parseISO } from 'date-fns';
import hdate from 'human-date';
import type { ReactElement } from 'react';
import type { Technology } from '~/types';
import { Section } from './section';

export function OtherTechnologiesSection({
  techs,
}: {
  techs: Technology[];
}): ReactElement {
  return (
    <Section title="Other Technologies">
      {techs
        .filter((t) => !t.tags.includes('love'))
        .sort((a, b) => compareAsc(parseISO(a.since), parseISO(b.since)))
        .map(
          (t) =>
            `${t.name} (${hdate.relativeTime(t.since).replaceAll(' ago', '')})`
        )
        .join(', ')}
    </Section>
  );
}
