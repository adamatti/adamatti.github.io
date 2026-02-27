import Link from 'next/link';
import type { ReactElement } from 'react';

const regex = /(http[s]?|mailto):(\/\/)?(?<url>.*)/;

export default function PlainLink({ href }: { href: string }): ReactElement {
  const label = regex.exec(href)?.groups?.url ?? href;

  return (
    <Link className="link" href={href} target="_blank">
      {label}
    </Link>
  );
}
