import '~/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { type ReactElement } from 'react';

const title = 'Marcelo Adamatti Portfolio';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
