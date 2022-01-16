// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 790px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: ${theme.colors.white};

  @media only screen and (max-width: 1180px) {
    height: 100%;
    justify-content: center;
  }
`

export const Content = styled.div`
  max-width: 2000px;
  width: fit-content;
  height: 790px;

  margin-bottom: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1180px) {
    width: 100%;
    height: 100%;
    
    padding: 12px;
    margin-bottom: 1rem;
  }
`

export const Title = styled.div`
  margin-top: -20px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 900;
  font-size: 58px;
  line-height: 64px;

  text-align: center;
  color: ${theme.colors.gray_blue_800};

  @media only screen and (max-width: 1024px) {
    margin-top: 60px;

    font-size: 38px;
    line-height: 38px;
  }
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

  @media only screen and (max-width: 1180px) {
    flex-direction: column;
    margin-top: 24px;
  }
`
