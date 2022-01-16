// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: linear-gradient(212.02deg, #000000 47.34%, #F16136 136.53%);

  @media only screen and (max-width: 1024px) {
    height: 100%;
  }
`

export const Content = styled.div`
  max-width: 2000px;
  width: calc(100% - 5rem);
  height: 900px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;

    margin-top: 0rem;
    padding: 12px;

    justify-content: flex-start;
  }
`

export const Row = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: flex-end;
  flex-direction: row;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const Column = styled.div`
  width: 28rem;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }
`

export const RowContent = styled.div`
  width: fit-content;
  height: fit-content;

  margin-top: 70px;
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  p {
    font-family: Barlow;
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 30px;

    text-transform: uppercase;
  }
`

export const IconCircle = styled.div`
  width: 100px;
  height: 100px;

  padding-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background-color: ${theme.colors.orange};
`

export const ColumnContent = styled.div`
  width: fit-content;
  height: fit-content;

  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  p {
    margin-top: 11px;
    margin-left: 20px;

    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;

    text-transform: uppercase;
  }

  h4 {
    margin-top: 5px;
    margin-left: 20px;

    font-family: Barlow;
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
    line-height: 52px;

    text-transform: uppercase;
  }
  
  @media only screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const RowImage = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: flex-end;
  flex-direction: row;

  margin-left: 50px;

  @media only screen and (max-width: 500px) {
    margin-left: 20px;
  }
`

export const Title = styled.div`
  width: 820px;

  margin-top: 36px;
  /* padding-left: 230px; */

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;

  font-family: Barlow;
  font-style: italic;
  font-weight: 600;
  font-size: 54px;
  line-height: 84px;
  text-transform: uppercase;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding-left: 0px;

    justify-content: center;
    align-items: center;

    font-size: 38px;
    text-align: center;
    line-height: 38px;
  }
`
