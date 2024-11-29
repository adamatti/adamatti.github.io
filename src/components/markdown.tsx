import MarkdownToJSX from 'markdown-to-jsx';
import Head from 'next/head';
import Link from 'next/link';
import React, { type ReactElement } from 'react';
import ExternalLink from './external-link';

function SyntaxHighlightedCode(
	props: React.HTMLProps<HTMLElement>,
): ReactElement {
	const ref = React.useRef<HTMLElement>(null);

	React.useEffect(() => {
		if (ref.current && props.className?.includes('lang-') && window.hljs) {
			window.hljs.highlightElement(ref.current);

			// hljs won't reprocess the element unless this attribute is removed
			ref.current.removeAttribute('data-highlighted');
		}
	}, [props.className]);

	return <code {...props} ref={ref} />;
}

function LinkRenderer(props: { href: string; children: React.ReactNode }) {
	if (props.href.toLowerCase().startsWith('http')) {
		return (
			<ExternalLink href={props.href} rel="noreferrer">
				{props.children}
			</ExternalLink>
		);
	}
	return (
		<Link href={props.href} style={{ color: 'white' }}>
			{props.children}
		</Link>
	);
}

export default function Markdown({
	children,
}: { children: string }): ReactElement {
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/styles/nord.min.css"
				/>
				<script
					src="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/highlight.min.js"
					async
				/>
			</Head>
			<MarkdownToJSX
				options={{
					overrides: {
						code: SyntaxHighlightedCode,
						a: LinkRenderer,
					},
				}}
			>
				{children}
			</MarkdownToJSX>
		</>
	);
}
