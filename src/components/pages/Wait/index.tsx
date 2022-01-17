// External librarie
import { useRouter } from 'next/router'
import React from 'react'
import Button from '../../common/Button'

// Styled
import {
  Container,
  Content,
  Row,
  RowIcons,
  Title
} from './styles'

const Wait: React.FC = () => {
  const router = useRouter()

  return (
    <Container>
      <Content>
        <Row>
          <Title>Em breve...</Title>
        </Row>
        <Row>
          <Button
            title='VOLTAR'
            width='294px'
            height='58px'
            color='white'
            backgroundColor='#F16136'
            onClick={() => router.push('https://biotronica.tech/')}
          />
        </Row>
        <RowIcons>
          <img src='/images/instagram.svg' />
          <img src='/images/twitter.svg' />
          <img src='/images/youtube.svg' />
        </RowIcons>
      </Content>
    </Container>
  )
}

export default Wait
