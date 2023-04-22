import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500&family=Kanit:wght@200;300;400;500&family=Open+Sans:wght@300;400;500;600;700&family=PT+Sans:wght@400;700&family=Rubik:wght@300;400;500;600&family=Work+Sans:wght@100;200;300;400;500&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
