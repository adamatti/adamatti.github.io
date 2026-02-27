import Link from 'next/link';
import type { ReactElement } from 'react';
import Image from './next-custom/image';

export default function SocialLink({
  href,
  icon,
}: {
  href: string;
  icon: string;
}): ReactElement {
  return (
    <Link
      className="hover:no-underline"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <Image
        alt={href}
        className="hover:translate-y-1"
        height={48}
        src={`/assets/icons/${icon}.png`}
        width={48}
      />
    </Link>
  );
}
