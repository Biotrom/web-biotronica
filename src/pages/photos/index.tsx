// External libraries
import React, { useEffect } from 'react'
import Head from 'next/head'

// Components
import FloatingHeader from '../../components/common/FloatingHeader'
import Footer from '../../components/common/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Fotos</title>
      </Head>
      <FloatingHeader />
      <Footer />
    </>
  )
}

export default Home
