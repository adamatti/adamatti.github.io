import Link from 'next/link';
import type { ReactElement } from 'react';
import PlainLink from '~/components/plain-link';
import { Section } from './section';

export function LinksSection(): ReactElement {
  return (
    <Section
      title={<Link href="https://adamatti.github.io">Marcelo Adamatti</Link>}
    >
      <ul className="grid list-disc grid-cols-1 px-4 sm:grid-cols-3">
        <li>
          email: <PlainLink href="mailto:adamatti@gmail.com" />
        </li>
        <li>
          whatsapp: <PlainLink href="https://wa.me/5551984253027" />
        </li>
        <li>
          portfolio: <PlainLink href="https://adamatti.github.io" />
        </li>
        <li>
          github: <PlainLink href="https://github.com/adamatti" />
        </li>
        <li>
          linkedin: <PlainLink href="http://www.linkedin.com/in/adamatti" />
        </li>
        <li>
          twitter: <PlainLink href="https://www.twitter.com/adamatti" />
        </li>
        <li>
          youtube: <PlainLink href="https://youtube.com/adamatti" />
        </li>
      </ul>
    </Section>
  );
}
