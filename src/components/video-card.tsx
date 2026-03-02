import Link from 'next/link';
import type { ReactElement } from 'react';
import { emitAnalyticsEvent } from '~/analytics/analytics';
import type { Video } from '~/types';

function YoutubeEmbed({ embedId }: { embedId: string }): ReactElement {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg">
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
        frameBorder="0"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="Embedded youtube"
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
    <div className="card card-compact w-full border border-gray-100 bg-white shadow-xl transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
      <div className="card-body">
        <YoutubeEmbed embedId={v.embedId} />
        <p className="mt-2 font-bold text-gray-900 text-lg dark:text-white">
          {v.title}
        </p>
        <div className="mt-1 flex flex-row flex-wrap place-content-center gap-2">
          {v.tags.map((t) => (
            <div
              className="bordered whitespace-nowrap rounded bg-cyan-500 px-2 py-0.5 font-medium text-[10px] text-white"
              key={t}
            >
              {t}
            </div>
          ))}
        </div>
        <p className="mt-2 text-gray-600 text-sm leading-relaxed dark:text-gray-400">
          {v.description}
        </p>
        <div className="card-actions mt-auto justify-center border-gray-50 border-t pt-4 dark:border-gray-700">
          <Link
            className="link font-semibold text-sm"
            href={v.url}
            onClick={() =>
              emitAnalyticsEvent('video_clicked', {
                title: v.title,
                url: v.url,
              })
            }
            target="_blank"
          >
            Go to Source
          </Link>
        </div>
      </div>
    </div>
  );
}
