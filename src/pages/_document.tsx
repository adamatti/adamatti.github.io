import { Head, Html, Main, NextScript } from 'next/document';
import type { ReactElement } from 'react';

export default function Document(): ReactElement {
	return (
		<Html lang="en">
			<Head />
			<body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
