import Link from 'next/link';
import { Fragment, type ReactElement } from 'react';

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
          <Fragment key={t}>
            {index > 0 && ', '}
            <Link className="link" href={`/blog/tags/${t}`}>
              {t}
            </Link>
          </Fragment>
        );
      })}
      ]
    </>
  );
}
