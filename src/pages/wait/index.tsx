// External libraries
import React from 'react'
import Head from 'next/head'
import Wait from '../../components/pages/Wait'

// Components

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Aguarde...</title>
      </Head>
      <Wait />
    </>
  )
}

export default Home
