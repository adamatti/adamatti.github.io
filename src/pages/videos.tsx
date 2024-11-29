import { type ChangeEvent, type ReactElement, useState } from 'react';
import VideoCard from '~/components/video-card';
import { query } from '~/server/graphql';
import type { Video } from '~/types';

interface StaticPropsResult {
	count: number;
	videos: Video[];
}

export async function getStaticProps(): Promise<{ props: StaticPropsResult }> {
	const q = `
  meta:_allVideosMeta {
    count
  }
	videos:allVideos {
    id
    title
    description
    tags
    url
    embedId
  }`;

	const {
		videos,
		meta: { count },
	} = await query(q);

	return {
		props: {
			videos,
			count,
		},
	};
}

export default function VideosPage({
	videos,
}: StaticPropsResult): ReactElement {
	const [filteredVideos, setFilteredVideos] = useState(videos);

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const filter = event.target.value.toLocaleLowerCase();

		const filterLogic = (v: Video): boolean => {
			return JSON.stringify(v).toLocaleLowerCase().includes(filter);
		};

		setFilteredVideos(filter ? videos.filter(filterLogic) : videos);
	};

	return (
		<div>
			<p className="py-5">
				Disclaimer: still working to find the best way to represent it
			</p>
			<input
				type="text"
				placeholder="Filter here"
				className="input input-bordered w-full"
				onChange={handleChange}
			/>
			<div className="w-auto grid grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
				{filteredVideos.map((v) => (
					<VideoCard key={v.id} video={v} />
				))}
			</div>
		</div>
	);
}
