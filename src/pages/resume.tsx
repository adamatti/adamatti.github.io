import Link from 'next/link';
import { type ReactNode, type ReactElement } from 'react';
import { type Job, type Technology } from '~/types';
import { query } from '../server/graphql';
import { parseISO, compareAsc } from 'date-fns';
import hdate from 'human-date';
import ShowTechs from '~/components/show-techs';
import PlainLink from '~/components/plain-link';
import { ShowJobs } from '~/components/jobs/show-jobs';

export async function getStaticProps(): Promise<{ props: { jobs: Job[]; techs: Technology[] } }> {
  const q = `
    techs:allTeches {
      id
      name
      since
      color
      image
      tags
    }
    jobs:allJobs(filter: {show: true, startDate_gte: "2013"}) {
      id
      title
      description
      startDate
      endDate
      agency:Agency {
        id
        name
        logo
        url
      }
      company:Company {
        id
        name
        logo
        url
      }    
      projects:Projects {
        id
        title
        results
        description
        keywords
      }
    }`;

  const { jobs, techs } = await query(q);

  return {
    props: {
      jobs,
      techs,
    },
  };
}

function CompanyListSection({ jobs }: { jobs: Job[] }): ReactElement {
  return (
    <Section title="Experience">
      <ShowJobs jobs={jobs} />
      <div className="font-bold">Previous companies were omitted here</div>
    </Section>
  );
}

function TechnologyListSection({ techs }: { techs: Technology[] }): ReactElement {
  const lovedOnes = techs.filter((t) => t.tags.includes('love'));

  return (
    <Section title="Main Tech Skills">
      There are a lot of technologies that I still haven't the opportunity to work with professionaly (e.g. clojure,
      elixir).
      <br />
      Those are the main ones that I am proficient and love to work with:
      <ShowTechs items={lovedOnes} filters={false} />
    </Section>
  );
}

function TopBar(): ReactElement {
  return (
    <div className="flex text-3xl justify-between">
      <div>
        <h1 className="capitalize">Marcelo Adamatti</h1>
      </div>
      <div>
        <PlainLink href="https://adamatti.github.io" />
      </div>
      <div>
        <Link href="mailto:adamatti@gmail.com">adamatti@gmail.com</Link>
      </div>
    </div>
  );
}

function SummarySection(): ReactElement {
  return (
    <Section title="Summary">
      <ul className="list-disc px-4">
        <li>English level C2 - did the latest test at June 2020</li>
        <li>
          Senior backend software engineed with +22 yrs experience, with experience with APIs, event processing and
          infra
        </li>
        <li>I know a few of frontend (e.g. react, vue), but UX/design is not my thing</li>
        <li>
          I worked in the last 10 years as tech lead, working in all the development lifecycle. Also have management
          experience
        </li>
      </ul>
    </Section>
  );
}

function OtherTechnologiesSection({ techs }: { techs: Technology[] }): ReactElement {
  return (
    <Section title="Other Technologies">
      {techs
        .filter((t) => !t.tags.includes('love'))
        .sort((a, b) => compareAsc(parseISO(a.since), parseISO(b.since)))
        .map((t) => `${t.name} (${hdate.relativeTime(t.since).replaceAll(' ago', '')})`)
        .join(', ')}
    </Section>
  );
}

function EducationSection(): ReactElement {
  return (
    <Section title="Education">
      <b className="font-bold">Facensa: </b>
      Information Technology, Software, Project
      <p>
        Thesis: code generator tool for java using several frameworks (e.g. hibernate, iBatis, prevayler, jsf, laszlo,
        thinlet).
        <br />
        <PlainLink href="http://code.google.com/p/fumigant" />
      </p>
    </Section>
  );
}

function LinksSection(): ReactElement {
  return (
    <Section title="Links">
      <ul className="list-disc px-4">
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

function Section({ title, children }: { title: string; children?: ReactNode }): ReactElement {
  return (
    <div className="py-2">
      <div className="text-2xl py-1">{title}</div>
      <div>{children}</div>
    </div>
  );
}

export default function ResumePage({ jobs, techs }: { jobs: Job[]; techs: Technology[] }): ReactElement {
  return (
    <>
      <TopBar />
      <SummarySection />
      <TechnologyListSection techs={techs} />
      <CompanyListSection jobs={jobs} />
      <OtherTechnologiesSection techs={techs} />
      <EducationSection />
      <LinksSection />
    </>
  );
}

ResumePage.disableLayout = true;
