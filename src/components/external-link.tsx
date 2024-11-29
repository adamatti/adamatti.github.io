import Link from 'next/link';
import type React from 'react';

type ExternalLinkProps = React.ComponentProps<typeof Link>;

export default function ExternalLink({
	className,
	...props
}: ExternalLinkProps) {
	return (
		<Link {...props} target="_blank" className={`external-link ${className}`} />
	);
}
