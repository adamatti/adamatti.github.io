import Link from 'next/link';
import { type ReactElement } from 'react';

export default function PlainLink({ href }: { href: string }): ReactElement {
  const regex = /http[s]?:\/\/(?<url>.*)/;

  const label = regex.exec(href)?.groups?.url ?? href;

  return (
    <Link href={href} target="_blank" className="link">
      {label}
    </Link>
  );
}
