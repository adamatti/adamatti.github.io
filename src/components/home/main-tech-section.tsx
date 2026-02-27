import Link from 'next/link';
import type { ReactElement } from 'react';
import type { Technology } from '~/types';
import ShowTechs from '../show-techs';

export default function MainStacks({
  items,
}: {
  items: Technology[];
}): ReactElement {
  return (
    <div className="mx-auto max-w-screen-lg py-6">
      <div className="section-title">My main technologies</div>
      <div className="text-center">The ones that I love most / worked more</div>
      <ShowTechs addLinks={true} filters={false} items={items} />
      <div className="text-center">
        Check the full list{' '}
        <Link className="link" href="/technologies">
          here
        </Link>
      </div>
    </div>
  );
}
