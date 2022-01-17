// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 935px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: ${theme.colors.white};

  @media only screen and (max-width: 1024px) {
    height: 100%;
  }
`

export const Content = styled.div`
  max-width: 2000px;
  width: calc(100vw - 10rem);
  height: 935px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;

    padding: 12px;

    flex-direction: column;
  }
`

export const ColumnIA = styled.div`
  height: fit-content;
  width: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

export const ColumnIAOpacity = styled.div`
  height: fit-content;
  width: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

export const Column = styled.div`
  height: fit-content;
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const IA = styled.h1`
  margin-bottom: 5rem;

  font-family: Barlow;
  font-style: normal;
  font-weight: 900;
  font-size: 150px;
  line-height: -20px;
  text-transform: uppercase;
  color: #F16136;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 0px;

    font-size: 50px;
    line-height: 40px;
    text-align: start;
  }

  @media only screen and (min-width: 1024px) {
    transform: rotate(-90deg);
  }
`

export const IAOpacity = styled.h1`
  margin-bottom: 15.5rem;

  font-family: Barlow;
  font-style: normal;
  font-weight: 900;
  font-size: 150px;
  line-height: -20PX;
  text-transform: uppercase;
  color: #F16136;
  mix-blend-mode: normal;
  /* opacity: 0.6; */

  @media only screen and (max-width: 1024px) {
    margin-bottom: 24px;

    font-size: 50px;
    line-height: 45px;
    text-align: start;
    /* writing-mode: horizontal-tb;
    transform: rotate(180deg); */
  }

  @media only screen and (min-width: 1024px) {
    transform: rotate(-90deg);
    opacity: 0.6;
  }
`

export const Title = styled.div`
  padding-left: 110px;

  font-family: Barlow;
  font-style: normal;
  font-weight: 900;
  font-size: 58px;
  line-height: 64px;

  color: ${theme.colors.gray_blue_800};

  @media only screen and (max-width: 1024px) {
    padding-left: 0px;
    font-size: 38px;
    line-height: 38px;
  }
`

export const Subtitle = styled.div`
  margin-top: 30px;
  padding-left: 110px;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 28px;

  color: ${theme.colors.gray_blue_400};

  @media only screen and (max-width: 1024px) {
    margin-top: 24px;
    padding-left: 0px;
  }
`

export const Row = styled.div`
  width: 100%;
  max-width: 900px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row;

  @media only screen and (max-width: 1024px) {
    width: 100%;

    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

export const Card = styled.div`
  width: 100%;
  max-width: 380px;
  height: 100%;
  max-height: 300px;
  min-height: 198px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  margin-top: 66px;
  margin-bottom: 4px;
  margin-right: 24px;
  padding: 40px;

  background: linear-gradient(212.02deg, #000000 47.34%, #F16136 136.53%);

  @media only screen and (max-width: 1024px) {
    width: 100%;
    max-width: 500px;
    height: fit-content;

    margin-top: 12px;
    margin-right: 0px;
  }

  @media only screen and (max-width: 1220px) {
    margin-right: 0px;
  }
`

export const ImageDiv = styled.div`
  @media only screen and (max-width: 1220px) {
    display: none;
  }
`

export const CardTitle = styled.h6`
  font-family: Barlow;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
`

export const CardSubtitle = styled.h6`
  margin-top: 10px;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 28px;
  color: ${theme.colors.gray_100}
`
