import { type ReactElement } from 'react';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const GA_TRACKING_ID = 'UA-1039281-11';

function GoogleAnalytics(): ReactElement {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string): any => {
      (window as any).gtag('config', GA_TRACKING_ID, { page_path: url });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

export default GoogleAnalytics;
