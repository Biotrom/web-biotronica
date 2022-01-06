// External libraries
import React, { useState } from 'react'

// Assets
import BiotronicaDark from '../../../assets/images/biotronica_dark.svg'

// Styled
import {
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

  return (
    <Container>
      <Content>
        <Logo>
          <BiotronicaDark />
        </Logo>
        <Nav>
          <Link isActive={home} href='#body2'>HOME</Link>
          <Link isActive={about} href='#body3'>SOBRE</Link>
          <Link isActive={product}>PRODUTO</Link>
          <Link isActive={depositions}>DEPOIMENTOS</Link>
          <Link isActive={photos}>FOTOS</Link>
          <Link isActive={contact}>CONTATO</Link>
        </Nav>
        <TransparentContainer>
        </TransparentContainer>
      </Content>
    </Container>
  )
}

export default Header
