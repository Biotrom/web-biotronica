// External libraries
import React from 'react'

// Components
import Button from '../../../../common/Button'

// Assets
import LiftImage from '../../../../../assets/images/lift.svg'
import Weights from '../../../../../assets/images/weights2.png'

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
import Image from 'next/image'

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
            <LiftImage />
          </Row>
          <RowImage>
            <Image src={Weights} />
          </RowImage>
        </Column>
      </Content>
    </Container>
  )
}

export default Lift
