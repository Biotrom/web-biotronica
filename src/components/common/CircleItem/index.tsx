// External libraries
import React from 'react'

// Styled
import {
  Container,
  Item
} from './styles'

interface CircleProps {
  title?: string
  size?: string

  paddingVertical?: string
  paddingHorizontal?: string

  marginTop?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string

  color?: string
  backgroundColor?: string
  border?: string
  borderColor?: string
  borderRadius?: string
}

const Circle: React.FC<CircleProps> = ({
  title,
  size,
  paddingVertical,
  paddingHorizontal,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  color,
  backgroundColor,
  border,
  borderColor,
  borderRadius
}) => {
  return (
    <Container
      size={size}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      backgroundColor={backgroundColor}
      border={border}
      borderColor={borderColor}
      borderRadius={borderRadius}
    >
      <Item
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
      </Item>
    </Container>
  )
}

export default Circle
