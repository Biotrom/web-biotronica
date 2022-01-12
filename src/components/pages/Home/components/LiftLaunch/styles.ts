// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 808px;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;

  background: ${theme.colors.white};

  @media only screen and (max-width: 1024px) {
    height: 100%;
    flex-direction: column;
  }
`

export const Content = styled.div`
  width: calc(100vw - 12rem);
  height: 808px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    flex-direction: column;

    padding: 12px;
  }
`

export const Column = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`

export const Title = styled.h2`
  margin-top: 49.25px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 900;
  font-size: 58px;
  line-height: 64px;

  color: ${theme.colors.gray_blue_800};

  @media only screen and (max-width: 1024px) {
    margin-top: 12px;
    font-size: 38px;
    line-height: 38px;
  }
`

export const Subtitle = styled.p`
  max-width: 500px;

  padding-top: 8.5px;
  padding-bottom: 40px;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 28px;

  color: ${theme.colors.gray_blue_400};

  @media only screen and (max-width: 1024px) {
    margin-top: 12px;
  }
`

export const Row = styled.div`
  width: 100%;
  height:fit-content;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
`

export const ImageDiv = styled.div`
  width: fit-content;
  position: absolute;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`
