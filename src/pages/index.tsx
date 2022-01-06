// External libraries
import React from 'react'
import Head from 'next/head'

// Components
import Body from '../components/pages/Home'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default Home
