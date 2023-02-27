import Link from 'next/link';
import { type ReactElement } from 'react';
import { type Technology } from '~/types';
import ShowTechs from '../show-techs';

export default function MainStacks({ items }: { items: Technology[] }): ReactElement {
  return (
    <>
      <div className="mx-auto max-w-screen-lg py-6">
        <div className="section-title">My main technologies</div>
        <div className="text-center">The ones that I love most / worked more</div>
        <ShowTechs items={items} filters={false} addLinks={true} />
        <div className="text-center">
          Check the full list{' '}
          <Link href="/technologies" className="link">
            here
          </Link>
        </div>
      </div>
    </>
  );
}
