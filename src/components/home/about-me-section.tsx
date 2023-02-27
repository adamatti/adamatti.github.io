import Color from '../color';
import avatar from '../../../public/assets/avatar.png';
import Link from 'next/link';
import { type ReactElement } from 'react';
import Image from '../next-custom/image';
import SocialLink from '../social-link';

export default function AboutMeSection(): ReactElement {
  return (
    <div className="mx-auto max-w-screen-lg py-6">
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden">
        <Image src={avatar} className="object-contain" alt="Avatar" layout="fill" />
      </div>
      <div className="section-title">
        Hi there, I'm <Color>Adamatti</Color> 👋
      </div>
      <div className="section-text">
        <p>
          I have +20 yrs as <Color>senior backend software engineer</Color>, +10yrs as <Color>tech lead</Color> with{' '}
          <Color>management</Color> experience, do speeches/coordinate events, +5 yrs as dad (one boy). I am a very
          pragmatic engineer that loves to deliver value.
        </p>
        <p>
          About methodologies, I am a true{' '}
          <Link href="https://en.wikipedia.org/wiki/Kanban" target="_blank">
            kanban lover
          </Link>{' '}
          (the methodology, not only the board), follow the{' '}
          <Link href="https://modernagile.org/" target="_blank">
            modern agile
          </Link>{' '}
          and{' '}
          <Link href="http://www.extremeprogramming.org/" target="_blank">
            extreme programming
          </Link>{' '}
          principles. Also worked a lot with scrum.
        </p>

        <p>
          About leadership, I love to hear people like{' '}
          <Link href="https://simonsinek.com/" target="_blank">
            Simon Sinek
          </Link>
          ,{' '}
          <Link href="https://www.maxwellleadership.com/" target="_blank">
            John Maxwell
          </Link>
          ,{' '}
          <Link href="https://danielwildt.com/" target="_blank">
            Daniel Wildt
          </Link>
          , etc
        </p>

        <p>
          Do you think I can help you to grow in your career (<Color>mentoring</Color>)? Would you like to{' '}
          <Color>hire me</Color>? Please schedule a time with me{' '}
          <Link href="https://calendly.com/adamatti" target="_blank" className="underline">
            here
          </Link>
          .
        </p>
      </div>
      <div className="mt-3 flex gap-1 justify-center">
        <SocialLink href="http://twitter.com/adamatti" icon="twitter" />
        <SocialLink href="http://www.linkedin.com/in/adamatti" icon="linkedin" />
        <SocialLink href="http://youtube.com/adamatti" icon="youtube" />
        <SocialLink href="https://www.facebook.com/marcelo.adamatti" icon="facebook" />
      </div>
    </div>
  );
}
