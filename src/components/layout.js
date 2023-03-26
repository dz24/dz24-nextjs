import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import HeaderComponent from "../components/header";

const name = 'dz24';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <>
    <HeaderComponent/>
    <div>
      <Head>
        <base target="_blank"></base>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
        
	  content="blabal.js"
        />
        <meta
          property="og:image"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
	  {children}
      </main>
      {!home && (
        <div>
          <Link href="./">← Back to home</Link>
        </div>
      )}
    </div>
    </>
  );
}
