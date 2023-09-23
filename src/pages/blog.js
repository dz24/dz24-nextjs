import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../components/posts';
import Link from 'next/link';
import Date from '../components/date';
import path from 'path';

export async function getStaticProps() {
  const adress = path.join(process.cwd(), 'src/markdown/blog');
  const allPostsData = getSortedPostsData({ adress });
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>ブログ</title>
      </Head>
      <section>
      <div className="mx-auto max-w-[800px]">
        <h1>ブログ</h1>
	<br/>
        <ul>
          {allPostsData.map(({ id, date, title, modi }) => (
	     <li key={id} className="list-none">
	       <Link href={`/blog/${id}`}><b>{title}</b>
	       <br/>
	       <small>
	         <Date dateString={modi} />
	       </small></Link>
	       <br/>
	       <br/>
	     </li>
          ))}
        </ul>
      </div>
      </section>
    </Layout>
  );
}
