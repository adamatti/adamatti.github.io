import Link from 'next/link';
// biome-ignore lint: required by test
import React from 'react';
import { emitAnalyticsEvent } from '~/analytics/analytics';

type ExternalLinkProps = React.ComponentProps<typeof Link>;

export default function ExternalLink({
  className,
  ...props
}: ExternalLinkProps) {
  return (
    <Link
      {...props}
      className={`external-link ${className}`}
      onClick={() =>
        emitAnalyticsEvent('external_link_clicked', { url: props.href })
      }
      target="_blank"
    />
  );
}
