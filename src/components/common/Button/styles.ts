// External libraries
import styled from 'styled-components'

interface ButtonProps {
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

export const Container = styled.button<ButtonProps>`
  width: ${props => props.width};
  height: ${props => props.height};

  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marignLeft};
  margin-right: ${props => props.marginRight};

  background-color: ${props => props.backgroundColor};
  border: none;

  cursor: pointer;

  transition: .5s;

  &:hover {
    filter: brightness(0.7);
  }

  @media only screen and (max-width: 900px) {
    cursor: none;
  }
`

export const Title = styled.p<ButtonProps>`
  color: ${props => props.color};

  padding-left: ${props => props.paddingHorizontal};
  padding-right: ${props => props.paddingHorizontal};
  padding-top: ${props => props.paddingVertical};
  padding-bottom: ${props => props.paddingVertical};

  text-align: center;
  text-transform: uppercase;
`
