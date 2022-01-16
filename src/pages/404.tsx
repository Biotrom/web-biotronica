// External libraries
import React from 'react'
import Head from 'next/head'
import NotFound from '../components/pages/NotFound'

// Components

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ops!</title>
      </Head>
      <NotFound />
    </>
  )
}

export default Home
