import Link from 'next/link';
import { type ChangeEvent, useState, type ReactElement } from 'react';
import { query } from '~/server/graphql';
import { type Video } from '~/types';

interface StaticPropsResult {
  count: number;
  videos: Video[];
}

function YoutubeEmbed({ embedId }: { embedId: string }): ReactElement {
  return (
    <div>
      <iframe
        width="460"
        height="200"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

function VideoCard({ video: v }: { video: Video }): ReactElement {
  return (
    <div className="card card-compact w-300 bg-base-100 shadow-xl">
      <div className="card-body">
        <YoutubeEmbed embedId={v.embedId} />
        <p className="font-bold">{v.title}</p>
        <div className="flex flex-row place-content-center gap-2">
          {v.tags.map((t) => (
            <div key={t} className="bordered rounded bg-cyan-400 text-white w-40">
              {t}
            </div>
          ))}
        </div>
        <p>{v.description}</p>
        <div className="card-actions justify-center">
          <Link href={v.url}>source</Link>
        </div>
      </div>
    </div>
  );
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

export default function VideosPage({ videos, count }: StaticPropsResult): ReactElement {
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
      <p className="py-5">Disclaimer: still working to find the best way to represent it</p>
      <input type="text" placeholder="Filter here" className="input input-bordered w-full" onChange={handleChange} />
      <div className="w-auto grid grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
        {filteredVideos.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </div>
  );
}
