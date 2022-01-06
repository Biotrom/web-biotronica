// External libraries
import Image from 'next/image'
import React from 'react'

// Components
import Button from '../../../../common/Button'

// Assets
import AthleteMan from '../../../../../assets/images/athlete_man.png'
import AthleteWoman from '../../../../../assets/images/athlete_woman.png'

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
  Row,
  Subtitle,
  Title
} from './styles'

const ArtificialInteligence: React.FC = () => {
  return (
    <Container>
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
            A mais alta tecnologia <br />
            combinada para te fazer <br />
            performar ainda mais.
          </Title>
          <Subtitle>
            Algorítmos de Machine Learning,
            que reconhecem padrões
            de movimentos, atrelados a <br />
            sensores de IoT, que se
            comunicam via Bluetooth Low Energy (BLE).
          </Subtitle>
          <Row>
            <Card>
              <CardTitle>
                Compre na PRÉ VENDA e <br />
                ganhe descontos
              </CardTitle>
              <CardSubtitle>
                Atletas de alto nível testaram e <br />
                aprovaram o LIFT.
              </CardSubtitle>
            </Card>
            <div style={{ marginRight: 24 }}>
              <Image src={AthleteMan} alt='athlete man' />
            </div>
            <div>
              <Image src={AthleteWoman} alt='athlete woman' />
            </div>
          </Row>
          <Row>
            <Button
              title='PRÉ-VENDA'
              width='294px'
              height='58px'
              marginTop='20px'
              color='white'
              backgroundColor='#F16136'
            />
          </Row>
        </Column>
      </Content>
    </Container>
  )
}

export default ArtificialInteligence
