// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 990px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: ${theme.colors.white};
`

export const Content = styled.div`
  width: fit-content;
  height: 690px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.div`
  font-family: Barlow;
  font-style: normal;
  font-weight: 900;
  font-size: 58px;
  line-height: 64px;

  text-align: center;
  color: ${theme.colors.gray_blue_800};
`

export const Row = styled.main`
  width: 100%;
  height: fit-content;

  margin-top: 50px;
  margin-right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const Card = styled.div`
  width: 380px;
  height: 501px;

  margin-left: 20px;
`

export const CardImage = styled.div`
  width: 380px;
  height: 320px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background-color: #D8D8D8;
`

export const SocialNetworkName = styled.p`
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  color: #525252;
`

export const CardTitle = styled.h3`
  font-family: Barlow;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 36px;

  color: ${theme.colors.gray_blue_800};
`

export const Column = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 50px;
  margin-right: 20px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export const Row2 = styled.main`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`

export const SmallText = styled.p`
  margin-left: 5px;

  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  color: #0F1123;
`
