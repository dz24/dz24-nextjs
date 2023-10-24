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
    <div className="2xl:w-[1140px] 2xl:px-0 lg:w-[940px] lg:px-0 md:w-[720px] md:px-0 md:mx-auto px-4">
      <Head>
        <base target="_blank"></base>
        <link rel="icon" href="/" />
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
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </>
  );
}
