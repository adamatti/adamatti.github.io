import Link from 'next/link';
import type { ReactElement } from 'react';
import { FaSmile } from 'react-icons/fa';

export default function AboutThisPageSection(): ReactElement {
	return (
		<div className="mx-auto max-w-screen-lg py-6">
			<div className="section-title">How this page was created?</div>
			<div className="text-center">
				Please check tech stack{' '}
				<Link href="/about" className="link">
					here
				</Link>
				<br />
				<p className="flex flex-nowrap text-center justify-center">
					I would love to receive a feedback what you think about this page{' '}
					<FaSmile />
				</p>
			</div>
		</div>
	);
}
