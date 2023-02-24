import { type ReactElement } from 'react';
import AboutMeSection from '~/components/about-me-section';
import HightlightsSection from '~/components/hightlights-section';
import AboutThisPageSection from '~/components/about-this-page';
import MainStacks from '~/components/main-tech-section';
import { query } from '~/server/graphql';
import { type Technology } from '~/types';

interface StaticPropsResult {
  items: Technology[];
  count: number;
}

export async function getStaticProps(): Promise<{ props: StaticPropsResult }> {
  const q = `items:allTeches(filter: {q: "loved"}) {
    id name color image tags since
  }
  eventsMeta:_allEventsMeta{
    count
  }`;

  const {
    items,
    eventsMeta: { count },
  } = await query(q);

  return {
    props: {
      items,
      count,
    },
  };
}

export default function Home({ items, count }: StaticPropsResult): ReactElement {
  return (
    <>
      <AboutMeSection />
      <HightlightsSection countEvents={count} />
      <MainStacks items={items} />
      <AboutThisPageSection />
    </>
  );
}
