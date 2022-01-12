// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../styles/theme'

export const Container = styled.header`
  width: 100%;
  height: 45.5rem;
  
  display: flex;
  flex-direction: column;

  background-color: ${theme.colors.white};

  @media only screen and (max-width: 1024px) {
    height: 100%;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 23rem;

  display: flex;
  align-items: center;

  background-color: ${theme.colors.orange};

  margin-top: 267px;

  @media only screen and (max-width: 1024px) {
    margin-top: 0px;
    height: 100%;
  }
`

export const ContentGrid = styled.div`
  width: 100%;
  height: 36rem;

  margin-right: 9rem;
  margin-bottom: 23rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.black};

  @media only screen and (max-width: 1024px) {
    height: 100%;
    margin-bottom: 0rem;
    padding: 12px;
  }
`

export const Grid = styled.div`
  width: min-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3.625rem;
  align-items: flex-start;
  justify-content: flex-start;

  div:first-child {
    width: 18.5rem;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const ItemGrid = styled.div`
  width: max-content;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  line-height: 30px;

  p {
    font-size: 17px;
    font-weight: 400;
  }

  h6 {
    font-weight: 700;
  }

  li {
    list-style-type: none;
    font-family: Lato;
    font-weight: 700;
  }
`

export const Title = styled.h4`
  font-family: Barlow;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 20px;
`

export const Phone = styled.div`
  margin-top: 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Barlow;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
`

export const LastText = styled.div`
  width: 100%;
  height: 6rem;

  background-color: ${theme.colors.orange};

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 28px;
  text-align: center;

  color: #E6E6E6;

  @media only screen and (max-width: 1024px) {
    height: 2rem;
  }
`
