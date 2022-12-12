import "styles/globals.css";
import Navbar from 'components/Navbar';
import type { AppProps } from "next/app";
import Footer from 'components/Footer';
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>    
      <Head>
          <title>All Songs Lyrics</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}