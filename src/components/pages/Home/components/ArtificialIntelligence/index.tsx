// External libraries
import { useRouter } from 'next/router'
import React from 'react'

// Components
import Button from '../../../../common/Button'

// Styled
import {
  Card,
  CardSubtitle,
  CardTitle,
  Column,
  ColumnIA,
  ColumnIAOpacity,
  Container,
  Content,
  IA,
  IAOpacity,
  ImageDiv,
  Row,
  Subtitle,
  Title
} from './styles'

const ArtificialIntelligence: React.FC = () => {
  const router = useRouter()

  return (
    <Container id='artificialintelligence'>
      <Content>
        <ColumnIA>
          <IA>
            INTELIGÊNCIA
          </IA>
        </ColumnIA>
        <ColumnIAOpacity>
          <IAOpacity>
            ARTIFICIAL
          </IAOpacity>
        </ColumnIAOpacity>
        <Column>
          <Title>
            A mais alta tecnologia
            combinada para te fazer
            performar ainda mais.
          </Title>
          <Subtitle>
            Algorítmos de Machine Learning,
            que reconhecem padrões
            de movimentos, atrelados a
            sensores de IoT, que se
            comunicam via Bluetooth Low Energy (BLE).
          </Subtitle>
          <Row>
            <Card>
              <CardTitle>
                Compre na PRÉ VENDA e
                ganhe descontos
              </CardTitle>
              <CardSubtitle>
                Atletas de alto nível testaram e
                aprovaram o LIFT.
              </CardSubtitle>
            </Card>
            <ImageDiv>
              <img src='/images/athlete_man.png' />
            </ImageDiv>
            <ImageDiv style={{ marginLeft: 24 }}>
              <img src='/images/athlete_woman.png' />
            </ImageDiv>
          </Row>
          <Row>
            <Button
              title='PRÉ-VENDA'
              width='294px'
              height='58px'
              marginTop='20px'
              color='white'
              backgroundColor='#F16136'
              onClick={() => router.push('/wait')}
            />
          </Row>
        </Column>
      </Content>
    </Container>
  )
}

export default ArtificialIntelligence
