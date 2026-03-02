import Link from 'next/link';
import type { ReactElement } from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaRss,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import { ffShowFacebook } from '~/feature-flags';

function FooterLink(args: {
  href: string;
  children: React.ReactNode;
}): ReactElement {
  return (
    <Link
      className="text-gray-500 text-xl transition"
      href={args.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {args.children}
    </Link>
  );
}

/**
 * TODO extract links to constants
 */
export default function Footer(): ReactElement {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <FooterLink href="mailto:adamatti@gmail.com">
            <FaEnvelope />
          </FooterLink>
          <FooterLink href="http://www.linkedin.com/in/adamatti">
            <FaLinkedin />
          </FooterLink>
          <FooterLink href="https://github.com/adamatti">
            <FaGithub />
          </FooterLink>
          {ffShowFacebook && (
            <FooterLink href="https://www.facebook.com/marcelo.adamatti">
              <FaFacebook />
            </FooterLink>
          )}
          <FooterLink href="http://twitter.com/adamatti">
            <FaTwitter />
          </FooterLink>
          <FooterLink href="http://youtube.com/adamatti">
            <FaYoutube />
          </FooterLink>
          <FooterLink href="https://wa.me/5551984253027">
            <FaWhatsapp />
          </FooterLink>
          <FooterLink href="/rss.xml">
            <FaRss />
          </FooterLink>
        </div>
        <div className="text-gray-500 text-sm dark:text-gray-400">
          Build version: {process.env.NEXT_PUBLIC_RELEASE_TAG ?? ''}
        </div>
      </div>
    </footer>
  );
}
