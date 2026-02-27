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
		<div className="relative flex flex-col h-full shadow-lg rounded-xl text-center py-6 bg-white dark:bg-gray-800 border dark:border-gray-700 transition-colors duration-300 overflow-hidden group">
			{/* Background Icon */}
			{args.icon && (
				<div className="absolute inset-0 flex items-center justify-center text-9xl opacity-10 dark:opacity-20 grayscale transition-transform duration-500 group-hover:scale-110 pointer-events-none">
					{args.icon}
				</div>
			)}

			<div className="relative z-10 text-2xl mb-2">
				{args.href && (
					<Link href={args.href} target={args.target}>
						{args.title}
					</Link>
				)}
				{!args.href && args.title}
			</div>
			<div className="relative z-10 px-2 flex-grow">
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
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
			<Card title="Brazilian Portuguese" icon={<HiChatBubbleLeftRight />}>
				<p>It is my native language</p>
				<p className="text-xs">
					... and the reason I produce content in portuguese
				</p>
			</Card>
			<Card
				title="C2"
				href="http://links.t-educationfirst.mkt4686.com/servlet/MailView?ms=NTY0Mzg4NTES1&r=LTc4NzMwNDUyNTMS1&j=MTkwMjYxMjQwNQS2&mt=1&rt=0"
				target="_blank"
				icon={<HiAcademicCap />}
			>
				<p>English Level</p>
				<p className="text-xs">
					working with international companies since 2007
				</p>
			</Card>
			<Card
				title="Home Location"
				href="https://goo.gl/maps/7Uig883Lwnp1MfBH9"
				target="_blank"
				icon={<HiMapPin />}
			>
				Canoas, RS, Brazil
			</Card>
			<Card
				title={numWords(countEvents)}
				href="/events"
				icon={<HiPresentationChartBar />}
			>
				<p>presentations / coordinations in events</p>
			</Card>
			<Card
				title={numWords(countVideos)}
				href="/videos"
				icon={<HiVideoCamera />}
			>
				<p>videos published</p>
			</Card>
		</div>
	);
}
