import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import { getAbout } from '../components/gallery';

export async function getStaticProps() {
  const aboutData = await getAbout();
  return {
    props: {
      aboutData,
    },
  };
}

export default function Home({aboutData }) {
  return (
    <Layout>
      <Head>
        <title>{aboutData.title}</title>
      </Head>
      <article>
      <div>
      <div>
        <Image
          priority
          src="/images/profile.jpg"
	  className="rounded-full mx-auto"
          height={175}
          width={175}
          alt=""
        />
      </div>
      </div>
      <div className="mx-auto max-w-[800px]">
       <h1>{aboutData.title}</h1>
       <div className="text-black/[.60] dark:text-white/[.80]">
         <b>エデイット:</b> <Date dateString={aboutData.modi} />
       </div>
       <div className="text-black/[.60] dark:text-white/[.80]">
         <b>出版:</b> <Date dateString={aboutData.date} />
       </div>
      <br/>
      </div>
      <div className="mx-auto max-w-[800px]">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.css"></link>
         <div dangerouslySetInnerHTML={{ __html: aboutData.yoyo}} />
      </div>
      </article>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div>
       <Link href="./">← Back to home</Link>
    </div>
    </Layout>
  );
}

