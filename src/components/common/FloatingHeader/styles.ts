// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../styles/theme'

interface HeaderProps {
  isActive: boolean
}

export const Container = styled.header<HeaderProps>`
  max-width: 100%;
  height: 100px;

  margin-top: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  @media only screen and (max-width: 1024px) {
    height: ${(props) => props.isActive
      ? '100%'
      : 'fit-content'
    };
    padding: 12px;
    background-color: ${(props) => props.isActive
      ? theme.colors.white
      : 'transparent'
    };
    margin-top: 0px;
    border-bottom: 0px;
    position: fixed;
  }
`

export const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100%;

  padding-left: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${theme.colors.white};

  > button {
    margin-left: auto;
  }

  @media only screen and (max-width: 1024px) {
    height: 100%;
    width: 100vw;

    padding-left: 0rem;
    
    justify-content: center;
    background-color: ${theme.colors.white};
  }
`

export const Logo = styled.div`
  width: 100px;
  height: 100px;

  background-color: ${theme.colors.orange};

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

export const Nav = styled.nav<HeaderProps>`
  height: 7rem;

  display: flex;
  align-items: center;

  font-size: 1.25rem;
  white-space: nowrap;

  @media only screen and (max-width: 1024px) {
    height: fit-content;
    display: ${(props) => props.isActive
      ? 'flex'
      : 'none'
    };
    flex-direction: column;
  }
  
`

export const Link = styled.a`
  margin-left: 1.25rem;

  display: inline-block;
  position: relative;
  padding: 0 0.5rem;
  height: 7rem;

  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 1.275rem;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 7rem;

  color: ${theme.colors.black};

  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.orange};
  }

  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    height: fit-content;

    margin-left: 0rem;
    
    line-height: 5rem;

    cursor: none;
  }
`

export const ButtonMenu = styled.button`
  width: 64px;
  height: 64px;

  padding-bottom: 3px;
  
  display: none;
  align-items: center;
  justify-content: center;

  border: 2px solid ${theme.colors.orange};
  border-radius: 100px;
  background-color: transparent;

  font-size: 35px;
  color: ${theme.colors.orange};

  position: fixed;
  top: 12px;
  right: 12px;

  @media only screen and (max-width: 1024px) {
    display: flex;
  }
`
