import Link from 'next/link';
import { type ReactElement } from 'react';
import Image from './next-custom/image';

export default function SocialLink({ href, icon }: { href: string; icon: string }): ReactElement {
  return (
    <Link href={href} className="hover:no-underline" target="_blank" rel="noreferrer">
      <Image className="hover:translate-y-1" src={`/assets/icons/${icon}.png`} width={48} height={48} alt={href} />
    </Link>
  );
}
