// External libraries
import React, { useEffect } from 'react'
import Head from 'next/head'

// Components
import Header from '../components/common/Header'
import Welcome from '../components/pages/Home/components/Welcome'
import ArtificialIntelligence from '../components/pages/Home/components/ArtificialIntelligence'
import Lift from '../components/pages/Home/components/Lift'
import LiftLaunch from '../components/pages/Home/components/LiftLaunch'
import Depositions from '../components/pages/Home/components/Depositions'
import SocialNetworks from '../components/pages/Home/components/SocialNetworks'
import Footer from '../components/common/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
      <Header />
      <Welcome />
      <ArtificialIntelligence />
      <Lift />
      <LiftLaunch />
      <SocialNetworks />
      <Footer />
    </>
  )
}

export default Home
