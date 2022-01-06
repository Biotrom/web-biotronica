// External libraries
import styled from 'styled-components'

interface ButtonProps {
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

export const Container = styled.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${props => props.size};
  height: ${props => props.size};

  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};

  background-color: ${props => props.backgroundColor};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  border-color: ${props => props.borderColor};
`

export const Item = styled.p<ButtonProps>`
  color: ${props => props.color};

  padding-left: ${props => props.paddingHorizontal};
  padding-right: ${props => props.paddingHorizontal};
  padding-top: ${props => props.paddingVertical};
  padding-bottom: ${props => props.paddingVertical};

  text-align: center;
  text-transform: uppercase;
`
