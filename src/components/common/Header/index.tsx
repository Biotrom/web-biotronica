// External libraries
import { useRouter } from 'next/router'
import React, { useState } from 'react'

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
  const router = useRouter()

  const [home, setHome] = useState(false)
  const [about, setAbout] = useState(false)
  const [product, setProduct] = useState(false)
  const [photos, setPhotos] = useState(false)
  const [contact, setContact] = useState(false)

  const [active, setActive] = useState(false)

  const handleActiveHome = () => {
    setHome(true)
    setAbout(false)
    setProduct(false)
    setPhotos(false)
    setContact(false)

    setActive(false)
  }

  const handleActiveAbout = () => {
    setHome(false)
    setAbout(true)
    setProduct(false)
    setPhotos(false)
    setContact(false)

    setActive(false)
  }

  const handleActiveProducts = () => {
    setHome(false)
    setAbout(false)
    setProduct(true)
    setPhotos(false)
    setContact(false)

    setActive(false)
  }

  const handleActiveContact = () => {
    setHome(false)
    setAbout(false)
    setProduct(false)
    setPhotos(false)
    setContact(true)

    setActive(false)
  }

  return (
    <Container isActive={active}>
      <Content>
        <Logo>
          <img src='/images/biotronica_dark.svg' />
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
          <Link
            isActive={photos}
            onClick={() => router.push('photos')}
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
        <TransparentContainer>
          <img src='/images/instagram.svg' />
          <img src='/images/twitter.svg' />
          <img src='/images/youtube.svg' />
        </TransparentContainer>
        <ButtonMenu onClick={() => setActive(!active)}>
          &#9776;
        </ButtonMenu>
      </Content>
    </Container>
  )
}

export default Header
