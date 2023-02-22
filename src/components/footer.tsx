import { type ReactElement } from 'react';
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

function FooterLink(args: { href: string; children: React.ReactNode }): ReactElement {
  return (
    <a className="text-xl text-gray-500 transition" target="_blank" rel="noopener noreferrer" href={args.href}>
      {args.children}
    </a>
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
          <FooterLink href="https://www.facebook.com/marcelo.adamatti">
            <FaFacebook />
          </FooterLink>
          <FooterLink href="http://twitter.com/adamatti">
            <FaTwitter />
          </FooterLink>
          <FooterLink href="http://youtube.com/adamatti">
            <FaYoutube />
          </FooterLink>
          <FooterLink href="https://wa.me/5551984253027">
            <FaWhatsapp />
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}
