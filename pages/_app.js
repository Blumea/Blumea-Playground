import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Blumea-Playground | Bloom Filter</title>
        <meta
          name='description'
          content='Explore blumea filters like never before! The playground provides you a platform to test and analyze and choose a filter of your choice.'
          key='desc'
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
