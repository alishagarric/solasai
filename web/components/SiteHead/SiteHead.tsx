/**
 *
 * Head.js
 * @author Alisha Garric
 * @description The website <head>.
 *
 */

// Core
import Head from "next/head";

// Begin Interface
//////////////////////////////////////////////////////////////////////

interface SiteHead {
  title: string;
}

// Begin Component
//////////////////////////////////////////////////////////////////////

export const SiteHead = ({ title = "This is the default title" }: SiteHead) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* Basic page needs */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      {/* Fonts and styles */}
      <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      {/* Opengraph */}
      <meta property="og:title" content="SolasAi" />
      <meta property="og:site_name" content="SolasAi" />
      <meta property="og:url" content="solasai.com" />
      <meta property="og:description" content="A platform to reduce your regulatory, legal, and reputational risk" />
      <meta property="og:type" content="article" />
      <meta property="og:image" content="/img/opengraph.png" />
    </Head>
  );
};
