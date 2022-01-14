// External libraries
import React from 'react'
import Image from 'next/image'

// Components
import Button from '../Button'

// Assets
import BiotronicaLight from '../../../assets/images/biotronica_light.png'
import Instagram from '../../../assets/images/instagram.svg'
import Twitter from '../../../assets/images/twitter.svg'
import Youtube from '../../../assets/images/youtube.svg'

// Styled
import {
  Column,
  Container,
  Content,
  ContentGrid,
  Grid,
  ItemGrid,
  LastText,
  Phone,
  Title
} from './styles'
import theme from '../../../styles/theme'

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <ContentGrid>
          <Grid>
            <ItemGrid>
              <Image
                src={BiotronicaLight}
                alt='biotronica light'
              />
              <p style={{ marginTop: 20 }}>
                Tecnologia de ponta a favor do seu desempenho.  
              </p>
              <p style={{ fontWeight: 700 }}>
                Compromisso com a alta performance
              </p>
              <Button
                title='PRÉ-VENDA'
                width='264px'
                paddingVertical='15px'
                marginTop='50px'
                color={theme.colors.white}
                backgroundColor={theme.colors.orange}
              />
            </ItemGrid>
            <ItemGrid>
              <Title>Contatos</Title>
              <p style={{ fontWeight: 700 }}>ONOVOLAB</p>
              <p style={{ fontWeight: 700 }}>Rua Aquidabam, 1 - Centro,</p>
              <p style={{ fontWeight: 700 }}>São Carlos - SP, 13560-120</p>
              <Phone>16 93618-0739</Phone>
            </ItemGrid>
            <ItemGrid>
              <Title>Acesso rápido</Title>
              <ul>
                <li>Sobre</li>
                <li style={{ color: theme.colors.orange }}>LIFT</li>
                <li>Depoimentos</li>
                <li>Fotos</li>
                <li>Pré-venda</li>
              </ul>
            </ItemGrid>
          </Grid>
        </ContentGrid>
        <Column>
          <Instagram />
          <Twitter />
          <Youtube />
        </Column>
      </Content>
      <LastText>
        Biotronica | Todos os direitos reservados.
      </LastText>
    </Container>
  )
}

export default Footer
