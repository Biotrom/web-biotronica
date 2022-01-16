// External libraries
import React from 'react'

// Components
import Button from '../../../../common/Button'

// Styled
import {
  Container,
  Content,
  Title
} from './styles'

const Welcome: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>
          Fotos
        </Title>
        <Title>
          <Button
            title='PRÉ-VENDA'
            width='294px'
            height='58px'
            marginTop='2rem'
            color='white'
            backgroundColor='#F16136'
          />
        </Title>
      </Content>
    </Container>
  )
}

export default Welcome
