// External libraries
import React from 'react'

// Components
import Button from '../../../../common/Button'

// Styled
import {
  Column,
  Container,
  Content,
  Row,
  RowImage,
  Subtitle,
  Title
} from './styles'

const Lift: React.FC = () => {
  return (
    <Container id='lift'>
      <Content>
        <Column>
          <Row>
            <Title>
              LIFT é a precisão que
              faltava nos seus treinos
            </Title>
          </Row>
          <Row>
            <Subtitle>
              Conheça nosso produto recém lançado e
              aprovado por inúmeros atletas
              de alto nível durnate o desenvolvimento
            </Subtitle>
          </Row>
          <Row>
            <Button
              title='PRÉ-VENDA'
              width='294px'
              height='58px'
              color='white'
              backgroundColor='#F16136'
            />
          </Row>
        </Column>
        <Column>
          <Row style={{ justifyContent: 'center' }}>
            <img src='/images/lift.svg' />
          </Row>
          <RowImage>
            <img src='/images/weights2.png' />
          </RowImage>
        </Column>
      </Content>
    </Container>
  )
}

export default Lift
