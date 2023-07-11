import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
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

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:title" content={`${CMS_NAME}`} />
      <meta
        name="description"
        content={`We are ${CMS_NAME}, a digital creation firm that provides support from UI/UX design to implementation for websites and applications.`}
      />
      <meta property="og:url" content={'/'} />
      <meta property="og:site_name" content={`${CMS_NAME}`} />
      <meta property="og:image" content={`https://${process.env.NEXT_DOMAIN}/favicon/ogp.png`} />
    </Head>
  )
}

export default Meta
