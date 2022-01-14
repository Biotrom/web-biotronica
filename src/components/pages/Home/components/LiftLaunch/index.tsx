// External libraries
import React from 'react'
import Image from 'next/image'

// Assets
import LiftOrange from '../../../../../assets/images/lift_orange.svg'
import Weights from '../../../../../assets/images/weights.png'
import StrongArm from '../../../../../assets/images/strong_arm.png'

// Styled
import {
  Column,
  Container,
  Content,
  ImageDiv,
  Row,
  Subtitle,
  Title
} from './styles'

const LiftLaunch: React.FC = () => {
  return (
    <Container id='liftlaunch'>
      <Content>
        <Column>
          <LiftOrange />
          <Title>
            Esteja informado sobre o
            lançamento do LIFT e demais produtos.
          </Title>
          <Subtitle>
            Deixe seu e-mail e entraremos em contato com novidades sobre a
            tecnologia aplicada que vai transformar treinos e atletas.
          </Subtitle>
        </Column>
        <Column>
          <Row>
            <Column style={{ marginLeft: 220, marginTop: 80 }}>
              <Image src={StrongArm} height={400} width={190} />
            </Column>
            <ImageDiv>
              <Image src={Weights} height={364} width={250} />
            </ImageDiv>
          </Row>
        </Column>
      </Content>
    </Container>
  )
}

export default LiftLaunch
