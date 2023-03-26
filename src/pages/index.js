import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData, } from '../components/gallery';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
    <Layout home>
      <Head>
        <title>dz24</title>
        <meta name="description" content="dz24 homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
      </Head>
      <main>
        <div>
	 <div className="flex items-center flex-wrap md:mx-auto sm:mx-12 mx-auto text-center" id="grid">
           {allPostsData.map(({ id, pwdfile, date, title }) => (
	      	<div className="group md:w-1/5 w-1/3 relative inline-block" id="card">
              	 <Link href={`/gallery/${id}`}>
	 	  <Image
              	     priority
              	     src={`${pwdfile}`}
              	     height={228}
              	     width={228}
              	     alt=""
              	  />
	      	  <div className="absolute inset-0 bg-black/25 invisible group-hover:visible flex float-left pl-2 pt-2" id="card_wrap">
	      	  <p className="text-white text-xl">{`${id}`}</p>
	      	  </div>
 	 	</Link>
	      	</div>
           ))}
	 </div>
        </div>
      </main>
    </Layout>
    </>
  )
}
