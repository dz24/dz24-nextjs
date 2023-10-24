import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPostIds2, getPostData2, } from '../../components/posts';
import Date from '../../components/date';
import Layout from '../../components/layout';
import path from 'path';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.id}</title>
      </Head>
      <article>

      <div>
          <Link href={`/gallery/${postData.pwdfile}`}  target="_blank">
	  <div style={{ position: 'relative', overflow: 'hidden', height: '600px' }}>
	  <Image
             priority
             src={`/gallery/${postData.pwdfile}`}
	     fill={true}
    	     style={{ objectFit: 'contain' }}
             alt=""
           />
        </div>
 	</Link>
        </div>
        <br/>
        <br/>
        <br/>
        <h1>{postData.pwdfile}</h1>
        <div className="text-black/[.60] dark:text-white/[.80]">
 	  <b>published:</b> <Date dateString={postData.mdatejson}/>
        </div>
      </article>
    <br/>
    <br/>
    <br/>
    <div>
       <Link href="/">← もどれ</Link>
    </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const adress = path.join(process.cwd(), 'public/gallery');
  const postData = await getPostData2(params.id, adress);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const adress = path.join(process.cwd(), 'public/gallery_crop');
  const paths = getAllPostIds2({adress});
  return {
    paths,
    fallback: false,
  };
}
