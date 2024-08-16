import '~/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, type ReactElement } from 'react';
import { hotjar } from 'react-hotjar';
import TailwindHacks from '~/components/layout/tailwind-hacks';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import { GoogleAnalytics } from '@next/third-parties/google';

const title = 'Marcelo Adamatti Portfolio';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const disableLayout = (Component as any).disableLayout ?? false;

  useEffect(() => {
    // FIXME remove hardcode values
    hotjar.initialize(1141202, 6);
  }, []);

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
      {process.env.NODE_ENV === 'production' && <GoogleAnalytics gaId="G-HRDZ9LVQZW" />}
    </>
  );
}
