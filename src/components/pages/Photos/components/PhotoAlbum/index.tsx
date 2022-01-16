// External libraries
import React from 'react'

// Styled
import {
  Container,
  Content,
  Grid,
  ItemGrid
} from './styles'

const PhotoAlbum: React.FC = () => {
  return (
    <Container>
      <Content>
        <Grid>
          <ItemGrid>
          </ItemGrid>
          <ItemGrid>
            <img src='/images/haroldo.png' alt='' height='100%' width='100%' />
          </ItemGrid>
          <ItemGrid>
          </ItemGrid>
          <ItemGrid>
            <img src='/images/right.jpg' alt='' height='100%' width='100%' />
          </ItemGrid>
          <ItemGrid>
            <img src='/images/haroldobarriga.png' alt='' height='100%' width='100%' />
          </ItemGrid>
          <ItemGrid>
            <img src='/images/left.jpg' alt='' height='100%' width='100%' />
          </ItemGrid>
          <ItemGrid>
            <img src='/images/leg_right.jpg' alt='' height='100%' width='100%' />
          </ItemGrid>
          <ItemGrid>
          </ItemGrid>
          <ItemGrid>
            <img src='/images/leg_left.jpg' alt='' height='100%' width='100%' />
          </ItemGrid>
        </Grid>
      </Content>
    </Container>
  )
}

export default PhotoAlbum
