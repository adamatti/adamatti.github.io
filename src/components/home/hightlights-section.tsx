import Link from 'next/link';
import numWords from 'num-words';
import type { ReactElement, ReactNode } from 'react';
import {
  HiAcademicCap,
  HiChatBubbleLeftRight,
  HiMapPin,
  HiPresentationChartBar,
  HiVideoCamera,
} from 'react-icons/hi2';

function Card(args: {
  title: string;
  href?: string;
  target?: string;
  icon?: ReactNode;
  children: ReactNode;
}): ReactElement {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-white py-6 text-center shadow-lg transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
      {/* Background Icon */}
      {args.icon && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-9xl opacity-10 grayscale transition-transform duration-500 group-hover:scale-110 dark:opacity-20">
          {args.icon}
        </div>
      )}

      <div className="relative z-10 mb-2 text-2xl">
        {args.href && (
          <Link href={args.href} target={args.target}>
            {args.title}
          </Link>
        )}
        {!args.href && args.title}
      </div>
      <div className="relative z-10 flex-grow px-2">
        {args.href && (
          <Link href={args.href} target={args.target}>
            {args.children}
          </Link>
        )}
        {!args.href && args.children}
      </div>
    </div>
  );
}

export default function HightlightsSection({
  countEvents,
  countVideos,
}: {
  countEvents: number;
  countVideos: number;
}): ReactElement {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
      <Card icon={<HiChatBubbleLeftRight />} title="Brazilian Portuguese">
        <p>It is my native language</p>
        <p className="text-xs">
          ... and the reason I produce content in portuguese
        </p>
      </Card>
      <Card
        href="http://links.t-educationfirst.mkt4686.com/servlet/MailView?ms=NTY0Mzg4NTES1&r=LTc4NzMwNDUyNTMS1&j=MTkwMjYxMjQwNQS2&mt=1&rt=0"
        icon={<HiAcademicCap />}
        target="_blank"
        title="C2"
      >
        <p>English Level</p>
        <p className="text-xs">
          working with international companies since 2007
        </p>
      </Card>
      <Card
        href="https://goo.gl/maps/7Uig883Lwnp1MfBH9"
        icon={<HiMapPin />}
        target="_blank"
        title="Home Location"
      >
        Canoas, RS, Brazil
      </Card>
      <Card
        href="/events"
        icon={<HiPresentationChartBar />}
        title={numWords(countEvents)}
      >
        <p>presentations / coordinations in events</p>
      </Card>
      <Card
        href="/videos"
        icon={<HiVideoCamera />}
        title={numWords(countVideos)}
      >
        <p>videos published</p>
      </Card>
    </div>
  );
}
