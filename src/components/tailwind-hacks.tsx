import { type ReactElement } from 'react';

/**
 * FIXME research why dynamic colors are not working without it
 */
function TagWithAllColors(): ReactElement {
  return (
    <div
      className="hidden
  shadow-amber-300
  shadow-black
  shadow-blue-500
  shadow-blue-600
  shadow-cyan-500
  shadow-cyan-700
  shadow-indigo-600
  shadow-lime-600
  shadow-orange-400
  shadow-orange-400
  shadow-orange-500
  shadow-red-600
  shadow-red-800
  shadow-sky-600
  shadow-gray-400
  shadow-slate-500
  shadow-teal-500
  shadow-zinc-50
  shadow-cyan-300
  shadow-cyan-500
  shadow-neutral-800
  shadow-orange-500
  shadow-pink-500
  shadow-rose-600
  shadow-sky-400
  shadow-sky-600
  shadow-zinc-700"
    ></div>
  );
}

export default function TailwindHacks(): ReactElement {
  return (
    <>
      <TagWithAllColors />
    </>
  );
}
