import type { ReactElement } from 'react';
import AboutMeSection from '~/components/home/about-me-section';
import AboutThisPageSection from '~/components/home/about-this-page';
import HightlightsSection from '~/components/home/hightlights-section';
import MainStacks from '~/components/home/main-tech-section';
import { query } from '~/server/graphql';
import type { Technology } from '~/types';

interface StaticPropsResult {
	items: Technology[];
	countEvents: number;
	countVideos: number;
}

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

	return {
		props: {
			items,
			countEvents,
			countVideos,
		},
	};
}

export default function Home({
	items,
	countEvents,
	countVideos,
}: StaticPropsResult): ReactElement {
	return (
		<>
			<AboutMeSection />
			<HightlightsSection countEvents={countEvents} countVideos={countVideos} />
			<MainStacks items={items} />
			<AboutThisPageSection />
		</>
	);
}
