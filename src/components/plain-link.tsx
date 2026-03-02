import Link from 'next/link';
import type { ReactElement } from 'react';
import { emitAnalyticsEvent } from '~/analytics/analytics';

const regex = /(http[s]?|mailto):(\/\/)?(?<url>.*)/;

export default function PlainLink({ href }: { href: string }): ReactElement {
  const label = regex.exec(href)?.groups?.url ?? href;

  return (
    <Link
      className="link"
      href={href}
      onClick={() => emitAnalyticsEvent('plain_link_clicked', { url: href })}
      target="_blank"
    >
      {label}
    </Link>
  );
}
