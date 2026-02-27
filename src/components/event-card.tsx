import type { ReactElement } from 'react';
import type { EventRecord } from '~/types';

export default function EventCard({
  event: e,
}: {
  event: EventRecord;
}): ReactElement {
  return (
    <div className="card card-compact w-full overflow-visible border border-gray-100 bg-white shadow-xl transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
      <div className="card-body">
        <div>
          <h2 className="card-title grid place-items-center text-gray-900 dark:text-white">
            {e.name}
          </h2>
          <div className="flex flex-row flex-wrap place-content-center gap-2">
            {e.tags.map((t) => (
              <div
                className="bordered whitespace-nowrap rounded bg-cyan-500 px-2 py-0.5 font-medium text-white text-xs"
                key={t}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-500 text-sm dark:text-gray-400">{e.date}</p>
        <p className="text-gray-900 dark:text-gray-100">
          <b className="text-gray-900 dark:text-white">Title:</b> {e.talk}
        </p>
        <p className="text-gray-600 dark:text-gray-400">{e.description}</p>
        <div className="card-actions mt-2 justify-center border-gray-100 border-t pt-4 dark:border-gray-700">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {Object.entries(e.links).map(([k, v]) => (
              <a
                className="link font-semibold text-sm"
                href={v}
                key={k}
                rel="noreferrer"
                target="_blank"
              >
                {k}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
