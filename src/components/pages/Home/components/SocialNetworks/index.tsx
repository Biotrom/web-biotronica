// External libraries
import React from 'react'

// Assets
import SocialNetworkCard from './components/SocialNetworkCard'

// Styled
import {
  Container,
  Content,
  Row,
  Title
} from './styles'

const SocialNetworks: React.FC = () => {
  return (
    <Container id='socialnetworks'>
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
