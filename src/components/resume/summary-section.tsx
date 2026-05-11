import type { ReactElement } from 'react';
import { Section } from './section';

export function SummarySection(): ReactElement {
  return (
    <Section title="Summary">
      <ul className="list-disc px-4">
        <li>
          Senior backend software engineer with +25 yrs experience, with
          experience with APIs, event processing and infra
        </li>
        <li>
          I worked in the last 10 years as tech lead, working in all the SDLC.
          Also have management experience
        </li>
        <li>
          Public speaker, tech youtuber, talking about leadership,
          tests/quality, microservices/architecture, languages and tools
        </li>
        <li>English level C2 - did the latest test at June 2020</li>
      </ul>
    </Section>
  );
}
