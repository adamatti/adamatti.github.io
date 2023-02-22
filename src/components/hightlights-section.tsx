import Link from "next/link";
import { ReactNode } from "react";

function Card(args: {title: string, children: ReactNode}){ 
  return <div className="shadow-lg rounded-xl text-center py-2">
    <div className="text-2xl">{args.title}</div>
    <div>{args.children}</div>
  </div>
}

export default function HightlightsSection() {
  return (<div className="grid grid-cols-4 gap-8">
      <Card title="Brazilian Portuguese">
        It is my native language
      </Card>
      <Card title="C2">
        <Link href="http://links.t-educationfirst.mkt4686.com/servlet/MailView?ms=NTY0Mzg4NTES1&r=LTc4NzMwNDUyNTMS1&j=MTkwMjYxMjQwNQS2&mt=1&rt=0" target="_blank">English Level</Link>
      </Card>
      <Card title="Remote Worker">
        No plans to relocate
      </Card>
      <Card title="Location">
          <Link href="https://goo.gl/maps/7Uig883Lwnp1MfBH9" target="_blank" className="underline">Canoas, RS, Brazil</Link>
      </Card>
    </div>)
}