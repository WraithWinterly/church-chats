import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add your custom meta tags, stylesheets, or scripts here */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <link rel="stylesheet" href="/styles.css" /> */}
        <Script src="/ChatbotScript.js" type="text/javascript" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
