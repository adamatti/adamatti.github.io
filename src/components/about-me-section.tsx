import Color from "./color";
import avatar from '../../public/avatar.png'
import Image from "next/image";
import Link from "next/link";

function SocialLink(args: {href: string, icon: string}) {
  return <a href={args.href} className="hover:no-underline" target="_blank" rel="noreferrer">
      <img className="h-12 w-12 hover:translate-y-1" src={`/icons/${args.icon}.png`} loading="lazy"/>
    </a>
}

export default function AboutMeSection() {
  return <div className="mx-auto max-w-screen-lg py-6">
    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden">
      <Image src={avatar} className="object-contain" alt="Avatar" layout="fill"/>
    </div>
    <div className="section-title">
      Hi there, I'm <Color>Adamatti</Color> 👋
    </div>
    <div className="section-text">
      I have +20 yrs as <Color>software engineer</Color>, +10yrs as <Color>tech lead</Color>, +1 as <Color>engineer manager</Color>, do speeches/coordinate events, +5 yrs as dad (one boy). I am a very pragmatic engineer that loves to deliver value.<br/>
      Do you think I can help you to grow in your career (<Color>mentoring</Color>)? Do you want to <Color>hire me</Color>? Please schedule a time with me <Link href="https://calendly.com/adamatti" target="_blank" className="underline">here</Link>
    </div>
    <div className="mt-3 flex gap-1 justify-center">
      <SocialLink href="http://twitter.com/adamatti" icon="twitter"/>
      <SocialLink href="http://www.linkedin.com/in/adamatti" icon="linkedin"/>
      <SocialLink href="http://youtube.com/adamatti" icon="youtube"/>
      <SocialLink href="https://www.facebook.com/marcelo.adamatti" icon="facebook"/>
    </div>
  </div>
}