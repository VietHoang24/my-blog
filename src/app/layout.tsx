import '@/styles/globals.scss';

import { Main } from '@/components/atoms/main';
import { Footer } from '@/components/molecules/footer';
import { Header } from '@/components/molecules/header';
import { Providers } from '@/providers';
import { Inter, Manrope } from '@/styles/fonts';
import cx from '@/utils/cx';
import { createMetadata } from '@/utils/metadata';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import { type PropsWithChildren } from 'react';

import { Meta } from './meta';

export const metadata = {
  ...createMetadata({
    title: 'Viet Salt – Full-stack Software Engineer',
    description:
      // eslint-disable-next-line max-len
      "I'm Viet Salt, a passionate and creative full-stack software engineer from Vietnam 🇻🇳. Visit my website to learn more about me and my projects",
    keywords: [
      'Viet Salt',
      'Viet Salt Dev',
      'jahir',
      'fiquitiva',
      'VietHoang24',
      'open-source',
      'full-stack',
      'software engineer',
      'Vietnam',
      'bio',
      'developer',
      'portfolio',
      'development',
      'android',
      'web',
    ],
  }),
};

const { UMAMI_WEBSITE_ID: umamiWebsiteId = '', IS_TEMPLATE = 'true' } =
  process.env;
export default function RootLayout(props: PropsWithChildren) {
  return (
    <html
      id={'page'}
      lang={'en'}
      className={cx(
        Inter.variable,
        Manrope.variable,
        IS_TEMPLATE === 'true' ? 'template' : '',
      )}
      suppressHydrationWarning
    >
      <head>
        <Meta />
        <Script
          src={'https://www.googletagmanager.com/gtag/js?id=G-5E3VXQLCP4'}
          strategy={'afterInteractive'}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5E3VXQLCP4');
          `}
        </Script>
      </head>
      <body>
        <Providers>
          <GoogleAnalytics gaId="G-5E3VXQLCP4" />
          <Analytics />
          <Header />
          <Main>{props.children}</Main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
