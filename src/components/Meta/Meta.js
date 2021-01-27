import Head from 'next/head'

function Meta(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image" content={props.bg}></meta>
      </Head>
    </div>
  )
}

export default Meta