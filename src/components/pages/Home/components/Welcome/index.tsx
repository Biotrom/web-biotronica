// External libraries
import Image from 'next/image'
import React from 'react'

// Components
import Button from '../../../../common/Button'
import DateItem from './components/DateItem'

// Assets
import BiotronicaLight from '../../../../../assets/images/biotronica_light_darken.png'
import IconTriangle from '../../../../../assets/images/icon_triangle.svg'

// Styled
import {
  Column,
  ColumnContent,
  Container,
  Content,
  IconCircle,
  Row,
  RowContent,
  RowImage,
  Title
} from './styles'

const Welcome: React.FC = () => {
  return (
    <Container id='welcome'>
      <Content>
        <Row>
          <Column>
            <RowContent>
              <IconCircle>
                <IconTriangle />
              </IconCircle>
              <ColumnContent>
                <p>PRECISÃO DO MOVIMENTO</p>
                <h4>CONHEÇA</h4>
              </ColumnContent>
            </RowContent>
          </Column>
        </Row>
        <RowImage>
          <Image
            src={BiotronicaLight}
            alt='biotronica light'
            height={257}
            width={2078}
          />
        </RowImage>
        <Title>
          Tecnologia de ponta
          a favor do seu desempenho.
        </Title>
        <Title>
          <Button
            title='PRÉ-VENDA'
            width='294px'
            height='58px'
            color='white'
            backgroundColor='#F16136'
          />
        </Title>
        <Row>
          <Column>
            <RowContent>
              <DateItem
                title='LANÇAMENTO'
                marginBottom='56px'
                color='#FFFFFF'
              />
              <DateItem
                title='22'
                size='56px'
                marginLeft='10px'
                marginBottom='56px'
                color='#F16136'
                border='1px solid'
                borderRadius='56px'
                borderColor='#F16136'
              />
              <DateItem
                title='22'
                size='56px'
                marginLeft='10px'
                marginBottom='56px'
                color='#FFFFFF'
                border='1px solid'
                borderRadius='56px'
                borderColor='#FFFFFF'
              />
              <DateItem
                title='22'
                size='56px'
                marginLeft='10px'
                marginBottom='56px'
                color='#F16136'
                border='1px solid'
                borderRadius='56px'
                borderColor='#F16136'
              />
            </RowContent>
          </Column>
        </Row>
      </Content>
    </Container>
  )
}

export default Welcome
