// External libraries
import React, { useEffect, useState } from 'react'

// Assets
import BiotronicaDark from '../../../assets/images/biotronica_dark.svg'

// Styled
import {
  ButtonMenu,
  Container,
  Content,
  Link,
  Logo,
  Nav,
  TransparentContainer
} from './styles'

const Header: React.FC = () => {
  const [home, setHome] = useState(true)
  const [about, setAbout] = useState(false)
  const [product, setProduct] = useState(false)
  const [depositions, setDepositions] = useState(false)
  const [photos, setPhotos] = useState(false)
  const [contact, setContact] = useState(false)
  
  const [active, setActive] = useState(false)

  const handleActiveHome = () => {
    setHome(true)
    setAbout(false)
    setProduct(false)
    setDepositions(false)
    setPhotos(false)
    setContact(false)

    setActive(false)

    if (active) scroll(0, 64)
    else scroll(0, 112)
  }

  const handleActiveAbout = () => {
    setHome(false)
    setAbout(true)
    setProduct(false)
    setDepositions(false)
    setPhotos(false)
    setContact(false)

    setActive(false)
  }

  const handleActiveProducts = () => {
    setHome(false)
    setAbout(false)
    setProduct(true)
    setDepositions(false)
    setPhotos(false)
    setContact(false)

    setActive(false)
  }

  const handleActiveDepositions = () => {
    setHome(false)
    setAbout(false)
    setProduct(false)
    setDepositions(true)
    setPhotos(false)
    setContact(false)

    setActive(false)
  }

  const handleActiveContact = () => {
    setHome(false)
    setAbout(false)
    setProduct(false)
    setDepositions(false)
    setPhotos(false)
    setContact(true)

    setActive(false)
  }

  return (
    <Container isActive={active}>
      <Content>
        <Logo>
          <BiotronicaDark />
        </Logo>
        <Nav isActive={active}>
          <Link 
            isActive={home} 
            onClick={handleActiveHome}
            href='#welcome'
          >
            HOME
          </Link>
          <Link 
            isActive={about}
            onClick={handleActiveAbout}
            href='#artificialintelligence'
          >
            SOBRE
          </Link>
          <Link 
            isActive={product} 
            onClick={handleActiveProducts}
            href='#lift'
          >
            PRODUTO
          </Link>
          {/* <Link 
            isActive={depositions} 
            onClick={handleActiveDepositions}
            href='#depositions'
          >
            DEPOIMENTOS
          </Link> */}
          <Link 
            isActive={photos} 
            href='https://biotronica.tech/photos'
          >
            FOTOS
          </Link>
          <Link 
            isActive={contact} 
            onClick={handleActiveContact}
            href='#socialnetworks'
          >
            CONTATO
          </Link>
        </Nav>
        <TransparentContainer />
        <ButtonMenu onClick={() => setActive(!active)}>
          &#9776;
        </ButtonMenu>
      </Content>
    </Container>
  )
}

export default Header