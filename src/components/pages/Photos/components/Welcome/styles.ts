// External libraries
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: linear-gradient(198.5deg, #000000 46.96%, #F16136 140.21%);

  @media only screen and (max-width: 1024px) {
    height: 100%;
  }
`

export const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 700px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;

    margin-top: 3rem;
    margin-bottom: 5rem;
    padding: 12px;

    justify-content: flex-start;
  }
`

// export const Column = styled.div`
//   width: 100%;
//   height: 100%;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `

// export const Row = styled.div`
//   width: 100%;
//   height: fit-content;

//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   flex-direction: row;

//   @media only screen and (max-width: 1024px) {
//     flex-direction: column;
//   }
// `

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;

  font-family: Barlow;
  font-style: italic;
  font-weight: 600;
  font-size: 70px;
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
