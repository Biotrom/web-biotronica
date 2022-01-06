import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    font: 400 16px 'Lato', sans-serif;
  }
`
