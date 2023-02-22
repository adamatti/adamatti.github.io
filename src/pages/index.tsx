import { type ReactElement } from 'react';
import AboutMeSection from '~/components/about-me-section';
import HightlightsSection from '~/components/hightlights-section';
import AboutThisPageSection from '~/components/about-this-page';
import MainStacks from '~/components/main-tech-section';
import { query } from '~/server/graphql';
import { type Technology } from '~/types';

export async function getStaticProps(): Promise<{ props: { items: Technology[] } }> {
  const q = `items:allTeches(filter: {q: "loved"}) {
    id name color image tags since
  }`;

  const { items } = await query(q);

  return {
    props: {
      items,
    },
  };
}

export default function Home({ items }: { items: Technology[] }): ReactElement {
  return (
    <>
      <AboutMeSection />
      <HightlightsSection />
      <MainStacks items={items} />
      <AboutThisPageSection />
    </>
  );
}
