// External libraries
import { useRouter } from 'next/router'
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
  const router = useRouter()

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
            onClick={() => router.push('/wait')}
          />
        </Title>
      </Content>
    </Container>
  )
}

export default Welcome
