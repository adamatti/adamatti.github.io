import type { ReactElement } from 'react';
import AboutMeSection from '~/components/home/about-me-section';
import AboutThisPageSection from '~/components/home/about-this-page';
import HightlightsSection from '~/components/home/hightlights-section';
import LatestPostsSection from '~/components/home/latest-posts-section';
import MainStacks from '~/components/home/main-tech-section';
import { getPosts } from '~/server/blog-posts';
import { query } from '~/server/graphql';
import { generateRssFeed } from '~/server/rss';
import type { BlogPost, Technology } from '~/types';

type StaticPropsResult = {
  countEvents: number;
  countVideos: number;
  items: Technology[];
  latestPosts: BlogPost[];
};

export async function getStaticProps(): Promise<{ props: StaticPropsResult }> {
  const q = `items:allTeches(filter: {q: "love"}) {
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

  const latestPosts = getPosts().slice(0, 3);

  generateRssFeed();

  return {
    props: {
      items,
      countEvents,
      countVideos,
      latestPosts,
    },
  };
}

export default function Home({
  items,
  countEvents,
  countVideos,
  latestPosts,
}: StaticPropsResult): ReactElement {
  return (
    <>
      <AboutMeSection />
      <HightlightsSection countEvents={countEvents} countVideos={countVideos} />
      <LatestPostsSection posts={latestPosts} />
      <MainStacks items={items} />
      <AboutThisPageSection />
    </>
  );
}
