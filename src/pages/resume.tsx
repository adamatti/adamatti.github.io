import Image from 'next/image';
import Link from 'next/link';
import { type ReactNode, type ReactElement } from 'react';
import { type Company, type Job, type Project, type Technology } from '~/types';
import { query } from '../server/graphql';
import { format, parseISO, formatDistance, compareAsc } from 'date-fns';
import hdate from 'human-date';
import ShowTechs from '~/components/show-techs';

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

function CompanyLogos({ job }: { job: Job }): ReactElement {
  const companies: Company[] = [job.agency, job.company].filter((i) => i?.logo) as Company[];

  if (!companies || companies.length === 0) {
    return <Image src="logos/empty.png" alt="no logo" width={48} height={48} />;
  }

  return (
    <>
      {companies.map((c: Company) => {
        return (
          <Link key={c.id} href={c.url} target="_blank">
            <Image key={c.id} src={`logos/${c.logo ?? ''}`} alt={c.name} width={48} height={48} />
          </Link>
        );
      })}
    </>
  );
}

function JobDates({ job }: { job: Job }): ReactElement {
  const formatString = 'MMM yyyy';

  const formatDate = (date: string): string => format(parseISO(date), formatString);

  const startDate = parseISO(job.startDate);
  const endDate = job.endDate ? parseISO(job.endDate) : new Date();
  const diff = formatDistance(endDate, startDate);

  return (
    <>
      {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : 'Current'} ({diff})
    </>
  );
}

function Projects({ job }: { job: Job }): ReactElement {
  if (!job.projects) {
    return <></>;
  }

  return (
    <div>
      <p className="font-bold">Projects:</p>
      <div>
        {job.projects.map((p: Project) => {
          return (
            <div key={p.id} className="grid grid-cols-[auto_200px] gap-2 py-1">
              <div>
                <div className="underline">{p.title}</div>
                <div>
                  <div>{p.description}</div>
                  {p.results && (
                    <div className="flex gap-1">
                      <div className="font-semibold">Results:</div>
                      <div>{p.results}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="align-text-bottom text-sm text-gray-500">{p.keywords.join(', ')}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function JobCard({ job }: { job: Job }): ReactElement {
  const companyName = job.agency
    ? `${job.agency.name} providing services to ${job.company?.name ?? 'secret'}`
    : job.company?.name;

  return (
    <div className="w-auto grid grid-cols-[40px_auto] gap-2 py-2">
      <div className="py-1">
        <CompanyLogos job={job} />
      </div>
      <div>
        <p className="font-bold">{job.title}</p>
        <p className="text-gray-500 text-sm">
          {companyName} - <JobDates job={job} />
        </p>
        <p>{job.description}</p>
        <div>
          <Projects job={job} />
        </div>
      </div>
    </div>
  );
}

function CompanyListSection({ jobs }: { jobs: Job[] }): ReactElement {
  return (
    <Section title="Experience">
      {jobs?.map((j) => (
        <JobCard key={j.id} job={j} />
      ))}
      <div className="font-bold">Previous companies were omitted here</div>
    </Section>
  );
}

function TechnologyListSection({ techs }: { techs: Technology[] }): ReactElement {
  const lovedOnes = techs.filter((t) => t.tags.includes('loved'));

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
        <li>English level C2 - did the latest test at 17 June 2020</li>
        <li>Work with IT since 2000, mainly on backend (e.g. API, event processing) and infra</li>
        <li>Knows a little about frontend (e.g. react, vue), but UX/design is not my thing</li>
        <li>Worked in the last 10 years as tech lead, working in all the development lifecycle</li>
        <li>
          Worked 1 year (2020, at Creditas) as manager, responsible for 3 teams / 10 resources. Would love to do it
          again
        </li>
        <li>Remote worker, no plans to relocate</li>
      </ul>
    </Section>
  );
}

function OtherTechnologiesSection({ techs }: { techs: Technology[] }): ReactElement {
  return (
    <Section title="Other Technologies">
      {techs
        .filter((t) => !t.tags.includes('loved'))
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

function PlainLink({ href }: { href: string }): ReactElement {
  return (
    <Link href={href} target="_blank" className="link">
      {href}
    </Link>
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
