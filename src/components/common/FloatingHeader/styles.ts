// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../styles/theme'

interface HeaderProps {
  isActive: boolean
}

export const Container = styled.header<HeaderProps>`
  max-width: 1180px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.white};
  border-bottom: 1px solid;
  border-bottom-color: ${theme.colors.gray_200};

  @media only screen and (max-width: 1024px) {
    height: ${(props) => props.isActive
      ? '100%'
      : 'fit-content'
    };
    padding: 12px;
    background-color: ${(props) => props.isActive
      ? theme.colors.black
      : 'transparent'
    };
    border-bottom: 0px;
    position: fixed;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 7rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    margin-left: auto;
  }

  @media only screen and (max-width: 1024px) {
    height: 100%;
    justify-content: center;
    background-color: ${theme.colors.black};
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

  @media only screen and (max-width: 1024px) {
    height: fit-content;
    line-height: 5rem;

    & + a {
      margin-left: 0rem;
    }

    ${(props) => props.isActive &&
      '::after { ' +
        'content: "";' +
        'height: 0px;' +
        'position: static;' +
      '}'
    }

    cursor: none;
  }
`

export const TransparentContainer = styled.div`
  width: 17.5rem;
  height: 100%;
  background-color: transparent;

  display: flex;

  /* border-left: 1px solid;
  border-left-color: ${theme.colors.gray_200}; */

  margin-bottom: 3px;

  @media only screen and (max-width: 1024px) {
    display: none;
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
