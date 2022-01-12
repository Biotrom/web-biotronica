// External libraries
import React from 'react'

// Components
import Welcome from './components/Welcome'
import ArtificialInteligence from './components/ArtificialInteligence'
import Lift from './components/Lift'
import LiftLaunch from './components/LiftLaunch'
import Depositions from './components/Depositions'
import SocialNetworks from './components/SocialNetworks'

const Body: React.FC = () => {
  return (
    <>
      <Welcome />
      <ArtificialInteligence />
      <Lift />
      <LiftLaunch />
      <SocialNetworks />
    </>
  )
}

export default Body
