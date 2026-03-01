import Link from 'next/link';
// biome-ignore lint: required by test
import React from 'react';

type ExternalLinkProps = React.ComponentProps<typeof Link>;

export default function ExternalLink({
  className,
  ...props
}: ExternalLinkProps) {
  return (
    <Link {...props} className={`external-link ${className}`} target="_blank" />
  );
}
