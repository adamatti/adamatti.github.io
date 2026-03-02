import '~/styles/globals.scss';
import { GoogleTagManager } from '@next/third-parties/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { type ReactElement, useEffect } from 'react';
import { hotjar } from 'react-hotjar';
import { emitAnalyticsEvent } from '~/analytics/analytics';
import Footer from '~/components/layout/footer';
import Header from '~/components/layout/header';
import TailwindHacks from '~/components/layout/tailwind-hacks';
import { ffUseGoogleAnalytics, ffUseHotjar } from '~/feature-flags';
import '~/analytics/amplitude';

const title = 'Marcelo Adamatti Portfolio';
const forceLightModePaths = ['/resume'];

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const disableLayout = (Component as any).disableLayout ?? false;

  useEffect(() => {
    if (ffUseHotjar) {
      hotjar.initialize({ id: 1_141_202, sv: 6 });
    }
    emitAnalyticsEvent('page_view', { path: window.location.pathname });
  }, []);
  const { pathname } = useRouter();
  const forcedTheme = forceLightModePaths.includes(pathname)
    ? 'light'
    : undefined;

  return (
    <ThemeProvider attribute="class" forcedTheme={forcedTheme}>
      <Head>
        <title>{title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={title} name="description" />
        <link href="/favicon.ico" rel="icon" />
        <link
          href="/rss.xml"
          rel="alternate"
          title="Adamatti Blog RSS Feed"
          type="application/rss+xml"
        />
      </Head>
      <TailwindHacks />
      <div className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-gray-900 dark:text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="flex min-h-screen flex-col justify-between">
            {!disableLayout && <Header />}
            <main className="mb-auto">
              <Component {...pageProps} />
            </main>
            {!disableLayout && <Footer />}
          </div>
        </div>
      </div>
      {ffUseGoogleAnalytics && <GoogleTagManager gtmId="G-HRDZ9LVQZW" />}
    </ThemeProvider>
  );
}
