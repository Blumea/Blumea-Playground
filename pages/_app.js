import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Blumea-Playground | Bloom Filter</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
