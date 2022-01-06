// External libraries
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 808px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: linear-gradient(212.02deg, rgba(0, 0, 0, 0.9) 47.34%, rgba(241, 97, 54, 0.9) 136.53%);
`

export const Content = styled.div`
  width: calc(100vw - 24rem);
  height: 808px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const Column = styled.div`
  width: 100%;
  height: 370px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

export const Row = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
`

export const Title = styled.h2`
  font-family: Barlow;
  font-style: normal;
  font-weight: 900;
  font-size: 58px;
  line-height: 64px;
`

export const Subtitle = styled.p`
  padding-top: 30px;
  padding-bottom: 50px;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 28px;
`
