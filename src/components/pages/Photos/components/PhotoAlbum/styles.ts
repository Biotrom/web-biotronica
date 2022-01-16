// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${theme.colors.white};

  @media only screen and (max-width: 1024px) {
    height: 100%;
    flex-direction: column;
  }
`

export const Content = styled.div`
  max-width: 2000px;
  width: 100%;
  height: 100%;

  padding-top: 150px;
  padding-bottom: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    flex-direction: column;

    padding: 12px;
  }
`

export const Grid = styled.div`
  width: min-content;
  
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`

export const ItemGrid = styled.div`
  width: 380px;
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #D8D8D8;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: fit-content;
  }
`