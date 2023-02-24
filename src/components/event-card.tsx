import { type ReactElement } from 'react';
import { type EventRecord } from '~/types';

function Dropdown({ label, links }: { label: string; links: Record<string, string> }): ReactElement {
  return (
    <div className="dropdown app-dropbox">
      <label tabIndex={0} className="btn m-1 ">
        {label} ({Object.keys(links).length})
      </label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        {Object.entries(links).map(([k, v]) => {
          return (
            <li key={k}>
              <a href={v} target="_blank" rel="noreferrer">
                {k}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function EventCard({ event: e }: { event: EventRecord }): ReactElement {
  return (
    <div className="card card-compact w-70 bg-base-100 shadow-xl">
      <div className="card-body">
        <div>
          <h2 className="card-title grid place-items-center">{e.name}</h2>
          <div className="flex flex-row place-content-center gap-2">
            {e.tags.map((t) => (
              <div key={t} className="bordered rounded bg-cyan-400 text-white w-40">
                {t}
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-400">{e.date}</p>
        <p>
          <b>Title:</b> {e.talk}
        </p>
        <p className="text-slate-400">{e.description}</p>
        <div className="card-actions justify-center">
          <Dropdown label="Resources" links={e.links} />
        </div>
      </div>
    </div>
  );
}
