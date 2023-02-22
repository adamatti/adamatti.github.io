import { Html, Head, Main, NextScript } from 'next/document';
import { type ReactElement } from 'react';
import Footer from '~/components/footer';
import Header from '~/components/header';
import TailwindHacks from '~/components/tailwind-hacks';

export default function Document(): ReactElement {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
        <TailwindHacks />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="flex h-screen flex-col justify-between">
            <Header />
            <main className="mb-auto">
              <Main />
              <NextScript />
            </main>
            <Footer />
          </div>
        </div>
      </body>
      <body></body>
    </Html>
  );
}
