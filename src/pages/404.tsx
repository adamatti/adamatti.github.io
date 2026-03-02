import Link from 'next/link';
import type { ReactElement } from 'react';

export default function Custom404(): ReactElement {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="font-extrabold text-6xl text-cyan-600 dark:text-cyan-400">
        404
      </h1>
      <h2 className="section-title mt-4">Page Not Found</h2>
      <p className="section-text max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="mt-8">
        <Link className="link font-semibold text-lg" href="/">
          &larr; Go back home
        </Link>
      </div>
    </div>
  );
}
