import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta
        name="description"
        content={`${CMS_NAME}`}
      />
      <meta property="og:image" content={'/assets/company-logo.svg'} />
    </Head>
  )
}

export default Meta
