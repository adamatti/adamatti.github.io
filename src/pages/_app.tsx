import '~/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { type ReactElement } from 'react';
import TailwindHacks from '~/components/layout/tailwind-hacks';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';

const title = 'Marcelo Adamatti Portfolio';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const disableLayout = (Component as any).disableLayout ?? false;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TailwindHacks />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="flex h-screen flex-col justify-between">
          {!disableLayout && <Header />}
          <main className="mb-auto">
            <Component {...pageProps} />
          </main>
          {!disableLayout && <Footer />}
        </div>
      </div>
    </>
  );
}
