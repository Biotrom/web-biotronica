// External libraries
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(198.5deg, #000000 46.96%, #F16136 140.21%);
  mix-blend-mode: normal;
  /* opacity: 0.85; */
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  padding: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Row = styled.div`
  width: 100%;
  height: fit-content;

  margin-top: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-family: Barlow;
  font-style: normal;
  font-weight: 900;
  font-size: 100px;
  line-height: 200px;

  text-align: center;

  color: #FFFFFF;

  text-shadow: -4px 2px 10px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 1024px) {
    font-size: 50px;
    line-height: 50px;
  }
`

export const RowIcons = styled.div`
  width: 294px;
  height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`
