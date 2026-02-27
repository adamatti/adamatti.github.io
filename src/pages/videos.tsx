import { type ChangeEvent, type ReactElement, useState } from 'react';
import VideoCard from '~/components/video-card';
import { query } from '~/server/graphql';
import type { Video } from '~/types';

type StaticPropsResult = {
  count: number;
  videos: Video[];
};

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
        className="input input-bordered w-full bg-white outline-none transition-colors focus:border-cyan-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-cyan-400"
        onChange={handleChange}
        placeholder="Filter here"
        type="text"
      />
      <div className="grid w-auto grid-cols-1 gap-8 px-4 py-8 text-center sm:px-0 md:grid-cols-2">
        {filteredVideos.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </div>
  );
}
