import Link from 'next/link';
import { type ReactElement } from 'react';

export default function TechStackSection(): ReactElement {
  return (
    <div className="mx-auto max-w-screen-lg py-6">
      <div className="section-title">How this page was created?</div>
      <div className="section-text">
        Please check tech stack{' '}
        <Link href="/about" className="underline">
          here
        </Link>
      </div>
    </div>
  );
}
