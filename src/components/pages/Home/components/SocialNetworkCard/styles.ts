// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../../../styles/theme'

export const Card = styled.div`
  width: 380px;
  height: 501px;

  margin-left: 20px;

  @media only screen and (max-width: 1180px) {
    width: 320px;
    height: fit-content;
  }
`

export const CardImage = styled.div`
  width: 380px;
  height: 320px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background-color: #D8D8D8;

  @media only screen and (max-width: 1180px) {
    width: 320px;
    height: 272px;
  }
`

export const SocialNetworkName = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 20px;

  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  color: #525252;
`

export const CardTitle = styled.h3`
  margin-left: 20px;

  font-family: Barlow;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 36px;

  color: ${theme.colors.gray_blue_800};
`

export const Row = styled.main`
  width: 100%;
  height: fit-content;

  margin-top: 50px;
  margin-left: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media only screen and (max-width: 1180px) {
    margin-top: 6px;
    margin-bottom: 50px;
    margin-left: 0px;
  }
`

export const Column = styled.div`
  width: 100%;
  height: fit-content;

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
  justify-content: center;
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
