import { type ReactElement } from 'react';
import AboutMeSection from '~/components/about-me-section';
import HightlightsSection from '~/components/hightlights-section';
import AboutThisPageSection from '~/components/about-this-page';
import MainStacks from '~/components/main-tech-section';
import { query } from '~/server/graphql';
import { type Technology } from '~/types';

interface StaticPropsResult {
  items: Technology[];
  countEvents: number;
  countVideos: number;
}

export async function getStaticProps(): Promise<{ props: StaticPropsResult }> {
  const q = `items:allTeches(filter: {q: "loved"}) {
    id name color image tags since
  }
  eventsMeta:_allEventsMeta{
    countEvents:count
  }
  videosMeta:_allVideosMeta {
    countVideos:count
  }`;

  const {
    items,
    eventsMeta: { countEvents },
    videosMeta: { countVideos },
  } = await query(q);

  return {
    props: {
      items,
      countEvents,
      countVideos,
    },
  };
}

export default function Home({ items, countEvents, countVideos }: StaticPropsResult): ReactElement {
  return (
    <>
      <AboutMeSection />
      <HightlightsSection countEvents={countEvents} countVideos={countVideos} />
      <MainStacks items={items} />
      <AboutThisPageSection />
    </>
  );
}
