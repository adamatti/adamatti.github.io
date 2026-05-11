import type { ReactElement } from 'react';
import PlainLink from '~/components/plain-link';
import { Section } from './section';

export function EducationSection(): ReactElement {
  return (
    <Section title="Education">
      <b className="font-bold">Facensa: </b>
      Information Technology, Software, Project
      <p>
        Thesis: code generator tool for java using several frameworks (e.g.
        hibernate, iBatis, prevayler, jsf, laszlo, thinlet).
        <br />
        <PlainLink href="http://code.google.com/p/fumigant" />
      </p>
    </Section>
  );
}
