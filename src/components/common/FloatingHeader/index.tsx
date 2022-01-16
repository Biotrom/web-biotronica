// External libraries
import React, { useState } from 'react'

// Assets
// import Youtube from '../../../assets/images/youtube.svg'
// import BiotronicaDarkOrange from '../../../assets/images/biotronica_dark_orange.png'

// Styled
import {
  ButtonMenu,
  Container,
  Content,
  Link,
  Logo,
  Nav
} from './styles'

const Header: React.FC = () => {
  const [active, setActive] = useState(false)

  return (
    <Container isActive={active}>
      <Content>
        <Nav isActive={active}>
          <img src='/images/biotronica_dark_orange.png' alt='' />
          <Link href='https://biotronica.tech/#welcome'>
            HOME
          </Link>
          <Link href='https://biotronica.tech/#artificialintelligence'>
            SOBRE
          </Link>
          <Link href='https://biotronica.tech/#lift'>
            PRODUTO
          </Link>
          {/* <Link href='https://biotronica.tech/#depositions'>
            DEPOIMENTOS
          </Link> */}
          <Link href='https://biotronica.tech/#socialnetworks'>
            CONTATO
          </Link>
        </Nav>
        <Logo>
          <img src='/images/youtube.svg' alt='' />
        </Logo>
        <ButtonMenu onClick={() => setActive(!active)}>
          &#9776;
        </ButtonMenu>
      </Content>
    </Container>
  )
}

export default Header
