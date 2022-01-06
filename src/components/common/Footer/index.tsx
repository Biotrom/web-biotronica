// External libraries
import React from 'react'
import Image from 'next/image'

// Components
import Button from '../Button'

// Utils
import { footer } from '../../../utils/text/footer'

// Assets
import BiotronicaLight from '../../../assets/images/biotronica_light.png'

// Styled
import {
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
              <p style={{ marginTop: 20 }}>{footer.first_column.text01}</p>
              <p style={{ fontWeight: 700 }}>{footer.first_column.text02}</p>
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
              <Title>
                {footer.second_column.title}
              </Title>
              <p style={{ fontWeight: 700 }}>{footer.second_column.text01}</p>
              <p style={{ fontWeight: 700 }}>{footer.second_column.text02}</p>
              <p style={{ fontWeight: 700 }}>{footer.second_column.text03}</p>
              <Phone>
                {footer.second_column.phone}
              </Phone>
            </ItemGrid>
            <ItemGrid>
              <Title>
                {footer.third_column.title}
              </Title>
              <ul>
                <li>{footer.third_column.item01}</li>
                <li style={{ color: theme.colors.orange }}>{footer.third_column.item02}</li>
                <li>{footer.third_column.item03}</li>
                <li>{footer.third_column.item04}</li>
                <li>{footer.third_column.item05}</li>
              </ul>
            </ItemGrid>
          </Grid>
        </ContentGrid>
      </Content>
      <LastText>
        Biotronica | Todos os direitos reservados.
      </LastText>
    </Container>
  )
}

export default Footer
