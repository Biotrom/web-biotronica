// External libraries
import React from 'react'

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
          <img src='/images/lift_orange.svg' />
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
            <Column>
              <img src='/images/weights.png' height={470} />
            </Column>
            <ImageDiv style={{ marginLeft: 220, marginTop: 80 }}>
              <img src='/images/strong_arm.png' />
            </ImageDiv>
          </Row>
        </Column>
      </Content>
    </Container>
  )
}

export default LiftLaunch
