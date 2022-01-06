// External libraries
import React from 'react'

// Assets
import Calendar from '../../../../../assets/images/calendar.svg'
import Shape from '../../../../../assets/images/shape.svg'
import SocialNetworkCard from '../SocialNetworkCard'

// Styled
import {
  Container,
  Content,
  Row,
  Title
} from './styles'

const SocialNetworks: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>
          Acompanhe-nos <br />
          nas redes sociais
        </Title>
        <Row>
          <SocialNetworkCard />
          <SocialNetworkCard />
          <SocialNetworkCard />
        </Row>
      </Content>
    </Container>
  )
}

export default SocialNetworks
