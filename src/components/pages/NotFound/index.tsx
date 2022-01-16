// External librarie
import React from 'react'
import Button from '../../common/Button'

// Styled
import {
  Container, 
  Content,
  NotFound404,
  Row,
  RowIcons,
  Title
} from './styles'

const NotFound: React.FC = () => {
  return (
    <Container>
      <Content>
        <Row>
          <Title>Página não encontrada</Title>
        </Row>
        <Row>
          <Button
            title='VOLTAR'
            width='294px'
            height='58px'
            color='white'
            backgroundColor='#F16136'
            onClick={() => ''}
          />
        </Row>
        <RowIcons>
            <img src='/images/instagram.svg' />
            <img src='/images/twitter.svg' />
            <img src='/images/youtube.svg' />
        </RowIcons>
        <NotFound404>404</NotFound404>
      </Content>
    </Container>
  )
}

export default NotFound
