// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../styles/theme'

export const Container = styled.header`
  width: 100%;
  height: 7rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.black};
  border-bottom: 1px solid;
  border-bottom-color: ${theme.colors.gray_200};

  @media only screen and (max-width: 900px) {
    height: fit-content;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 7rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  >button {
    margin-left: auto;
  }

  @media only screen and (max-width: 900px) {
    height: fit-content;
  }
`

export const Logo = styled.div`
  width: 17.5rem;
  height: 100%;

  background-color: ${theme.colors.orange};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 3px;
`

export const Nav = styled.nav`
  height: 7rem;

  display: flex;
  align-items: center;

  font-size: 1.25rem;
  white-space: nowrap;
`

interface LinkProps {
  isActive: boolean
}

export const Link = styled.a<LinkProps>`
  display: inline-block;
  position: relative;
  padding: 0 0.5rem;
  height: 7rem;
  line-height: 7rem;

  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 1.275rem;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  color: ${(props) => props.isActive
    ? theme.colors.orange
    : theme.colors.white
  };

  & + a {
    margin-left: 1.25rem;
  }

  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.orange};
  }

  ${(props) => props.isActive &&
    '::after { ' +
      'content: "";' +
      'height: 5px;' +
      'border-radius: 3px 3px 0 0;' +
      'width: 100%;' +
      'position: absolute;' +
      'bottom: 1px;' +
      'left: 0;' +
      'background: #F16136;' +
    '}'
  }

  cursor: pointer;
`

export const TransparentContainer = styled.div`
  width: 17.5rem;
  height: 100%;
  background-color: transparent;

  display: flex;

  /* border-left: 1px solid;
  border-left-color: ${theme.colors.gray_200}; */

  margin-bottom: 3px;
`
