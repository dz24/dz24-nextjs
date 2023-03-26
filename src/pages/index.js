import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <>
    <Layout home>
      <Head>
        <title>dz24</title>
        <meta name="description" content="dz24 homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
        </div>
        <div className={styles.center}>
         <p>whada </p>
        </div>
    	<h1 className="text-3xl font-bold underline text-green-400">
    	  Hello world!
    	</h1>
      </main>
    </Layout>
    </>
  )
}
