// External libraries
import React from 'react'
import Head from 'next/head'

// Components
import FloatingHeader from '../../components/common/FloatingHeader'
import Welcome from '../../components/pages/Photos/components/Welcome'
import PhotoAlbum from '../../components/pages/Photos/components/PhotoAlbum'
import Footer from '../../components/common/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Fotos</title>
      </Head>
      <FloatingHeader />
      <Welcome />
      <PhotoAlbum />
      <Footer />
    </>
  )
}

export default Home
