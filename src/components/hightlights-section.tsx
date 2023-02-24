import Link from 'next/link';
import { type ReactElement, type ReactNode } from 'react';

function Card(args: { title: string; href?: string; target?: string; children: ReactNode }): ReactElement {
  return (
    <div className="shadow-lg rounded-xl text-center py-2">
      <div className="text-2xl">
        {args.href && (
          <Link href={args.href} target={args.target}>
            {args.title}
          </Link>
        )}
        {!args.href && args.title}
      </div>
      <div>
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

export default function HightlightsSection({ countEvents }: { countEvents: number }): ReactElement {
  return (
    <div className="grid grid-cols-5 gap-8">
      <Card title="Brazilian Portuguese">
        <p>It is my native language</p>
        <p className="text-xs">... and the reason I produce content in portuguese</p>
      </Card>
      <Card
        title="C2"
        href="http://links.t-educationfirst.mkt4686.com/servlet/MailView?ms=NTY0Mzg4NTES1&r=LTc4NzMwNDUyNTMS1&j=MTkwMjYxMjQwNQS2&mt=1&rt=0"
        target="_blank"
      >
        <p>English Level</p>
        <p className="text-xs">working with international companies since 2007</p>
      </Card>
      <Card title="Remote Worker">
        <p>No plans to relocate</p>
        <p className="text-xs">I want to stay close to the family</p>
      </Card>
      <Card title="Home Location" href="https://goo.gl/maps/7Uig883Lwnp1MfBH9" target="_blank">
        Canoas, RS, Brazil
      </Card>
      <Card title={`${countEvents}`} href="/events">
        <p>presentations / coordinations in events</p>
      </Card>
    </div>
  );
}
