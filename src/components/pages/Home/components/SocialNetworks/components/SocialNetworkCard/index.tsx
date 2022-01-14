// External libraries
import React from 'react'

// Assets
import Calendar from '../../../../../../../assets/images/calendar.svg'
import Shape from '../../../../../../../assets/images/shape.svg'

// Styled
import {
  Card,
  CardImage,
  CardTitle,
  Column,
  Row,
  Row2,
  SmallText,
  SocialNetworkName
} from './styles'

const SocialNetworkCard: React.FC = () => {
  return (
    <Card>
      <CardImage />
      <SocialNetworkName>
        Instagram
      </SocialNetworkName>
      <CardTitle>
        We would love to share similar experience gym
      </CardTitle>
      <Row>
        <Column>
          <Row2>
            <Calendar />
            <SmallText>27 Mar 2021</SmallText>
          </Row2>
        </Column>
        <Column>
          <Row2>
            <Shape />
            <SmallText>by Biotrônica</SmallText>
          </Row2>
        </Column>
      </Row>
    </Card>
  )
}

export default SocialNetworkCard
