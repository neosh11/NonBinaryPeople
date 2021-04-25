import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

const siteName = 'Non-Binary People Org'
const twitterHandle = '@'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }
  render() {
    return (
      <Html lang='en-AU'>
        <Head>
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content={siteName} />
          <meta name='twitter:creator' content={twitterHandle} />
          <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
