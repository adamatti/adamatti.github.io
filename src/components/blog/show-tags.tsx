import Link from 'next/link';
import type { ReactElement } from 'react';

export default function ShowTags({
  tags,
}: {
  tags: string[];
}): ReactElement | null {
  if (!tags) {
    return null;
  }
  return (
    <>
      {' '}
      - [
      {tags.map((t, index) => {
        return (
          <>
            {index > 0 && ', '}
            <Link className="link" href={`/blog/tags/${t}`} key={t}>
              {t}
            </Link>
          </>
        );
      })}
      ]
    </>
  );
}
