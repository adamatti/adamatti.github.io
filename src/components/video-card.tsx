import Link from 'next/link';
import type { ReactElement } from 'react';
import type { Video } from '~/types';

function YoutubeEmbed({ embedId }: { embedId: string }): ReactElement {
  return (
    <div>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        height="200"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="Embedded youtube"
        width="460"
      />
    </div>
  );
}

export default function VideoCard({
  video: v,
}: {
  video: Video;
}): ReactElement {
  return (
    <div className="card card-compact w-300 bg-base-100 shadow-xl">
      <div className="card-body">
        <YoutubeEmbed embedId={v.embedId} />
        <p className="font-bold">{v.title}</p>
        <div className="flex flex-row place-content-center gap-2">
          {v.tags.map((t) => (
            <div
              className="bordered w-40 rounded bg-cyan-400 text-white"
              key={t}
            >
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
