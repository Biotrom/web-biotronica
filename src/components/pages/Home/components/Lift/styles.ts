// External libraries
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: linear-gradient(212.02deg, rgba(0, 0, 0, 0.9) 47.34%, rgba(241, 97, 54, 0.9) 136.53%);

  @media only screen and (max-width: 1024px) {
    height: 100%;
  }
`

export const Content = styled.div`
  max-width: 2000px;
  width: calc(100vw - 18rem);
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;

    padding: 12px;

    flex-direction: column-reverse;
  }
`

export const Column = styled.div`
  width: 100%;
  height: 370px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: fit-content;

    margin-top: 30px;

    justify-content: center;
    flex-direction: column;
  }
`

export const Row = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;

  @media only screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-bottom: 30px;
  }
`

export const RowImage = styled.div`
  max-width: 580px;
  width: 100%;
  height: fit-content;

  background-color: goldenrod;

  margin-top: 8rem;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;

  img {
    max-width: 580px;
    width: 100%;
  }

  @media only screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: 0px;
  }
`

export const Title = styled.h2`
  font-family: Barlow;
  font-style: normal;
  font-weight: 900;
  font-size: 58px;
  line-height: 64px;

  @media only screen and (max-width: 1024px) {
    font-size: 38px;
    line-height: 38px;
  }
`

export const Subtitle = styled.p`
  padding-top: 30px;
  padding-bottom: 50px;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 28px;

  @media only screen and (max-width: 1024px) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`
