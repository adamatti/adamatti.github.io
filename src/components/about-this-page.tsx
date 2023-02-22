import Link from 'next/link';
import { type ReactElement } from 'react';

export default function AboutThisPageSection(): ReactElement {
  return (
    <div className="mx-auto max-w-screen-lg py-6">
      <div className="section-title">How this page was created?</div>
      <div className="text-center">
        Please check tech stack{' '}
        <Link href="/about" className="link">
          here
        </Link>
      </div>
    </div>
  );
}
