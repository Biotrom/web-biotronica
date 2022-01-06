// External libraries
import React from 'react'

// Components
import Button from '../../../../common/Button'

// Assets
import LiftImage from '../../../../../assets/images/lift.svg'

// Styled
import {
  Column,
  Container,
  Content,
  Row,
  Subtitle,
  Title
} from './styles'

const Lift: React.FC = () => {
  return (
    <Container>
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
          <LiftImage />
        </Column>
      </Content>
    </Container>
  )
}

export default Lift
