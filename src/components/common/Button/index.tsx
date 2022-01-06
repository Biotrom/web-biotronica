// External libraries
import React from 'react'

// Styled
import {
  Container,
  Title
} from './styles'

interface ButtonProps {
  title: string

  width?: string
  height?: string

  paddingVertical?: string
  paddingHorizontal?: string

  marginTop?: string
  marginBottom?: string
  marignLeft?: string
  marginRight?: string

  color?: string
  backgroundColor?: string
}

const Button: React.FC<ButtonProps> = ({
  title,
  width,
  height,
  paddingVertical,
  paddingHorizontal,
  marginTop,
  marginBottom,
  marignLeft,
  marginRight,
  color,
  backgroundColor,
}) => {
  return (
    <Container
      width={width}
      height={height}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marignLeft={marignLeft}
      marginRight={marginRight}
      backgroundColor={backgroundColor}
    >
      <Title
        paddingVertical={paddingVertical}
        paddingHorizontal={paddingHorizontal}
        color={color}
        style={{
          fontSize: 22,
          fontWeight: 600,
          fontFamily: 'Barlow'
        }}
      >
        {title}
      </Title>
    </Container>
  )
}

export default Button
