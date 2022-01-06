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
`

export const Content = styled.div`
  width: calc(100vw - 10rem);
  height: 935px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const ColumnIA = styled.div`
  height: fit-content;
  width: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ColumnIAOpacity = styled.div`
  height: fit-content;
  width: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  line-height: -20PX;
  text-transform: uppercase;
  color: #F16136;

  transform: rotate(-90deg);
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
  opacity: 0.6;

  transform: rotate(-90deg);
`

export const Title = styled.div`
  font-family: Barlow;
  font-style: normal;
  font-weight: 900;
  font-size: 58px;
  line-height: 64px;

  color: ${theme.colors.gray_blue_800};
`

export const Subtitle = styled.div`
  margin-top: 30px;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 28px;

  color: ${theme.colors.gray_blue_400};
`

export const Row = styled.div`
  width: 900px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row;
`

export const Card = styled.div`
  width: 380px;
  height: 198px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  margin-top: 66px;
  margin-bottom: 4px;
  margin-right: 24px;
  padding: 40px;

  background: linear-gradient(212.02deg, #000000 47.34%, #F16136 136.53%);
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
