import Head from 'next/head';
import Link from 'next/link';
import { getAllPostIds, getPostData,  } from '../../components/posts';
import Date from '../../components/date';
import Layout from '../../components/layout';
import path from 'path';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
      <div className="mx-auto max-w-[800px]">
        <h1>{postData.title}</h1>
        <div className="text-black/[.60] dark:text-white/[.80]">
         <b>エデイット:</b> <Date dateString={postData.modi} />
        </div>
        <div className="text-black/[.60] dark:text-white/[.80]">
         <b>出版:</b> <Date dateString={postData.date} />
        </div>
	<br/>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </article>
    <br/>
    <br/>
    <br/>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const adress = path.join(process.cwd(), 'src/markdown/projects');
  const postData = await getPostData(params.id, adress);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const adress = path.join(process.cwd(), 'src/markdown/projects');
  const paths = getAllPostIds({adress});
  return {
    paths,
    fallback: false,
  };
}

