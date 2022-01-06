// External libraries
import React from 'react'

// Components
import ArtificialInteligence from './components/ArtificialInteligence'
import Depositions from './components/Depositions'
import Lift from './components/Lift'
import LiftLaunch from './components/LiftLaunch'
import SocialNetworks from './components/SocialNetworks'
import Welcome from './components/Welcome'

const Body: React.FC = () => {
  return (
    <>
      <Welcome />
      <ArtificialInteligence />
      <Lift />
      <LiftLaunch />
      <Depositions />
      <SocialNetworks />
    </>
  )
}

export default Body
