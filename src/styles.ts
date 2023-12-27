import { createGlobalStyle } from 'styled-components'

export const palette = {
  red: '#A60A27',
  orange: '#F25C05',
  orangeLight: '#F27405',
  brown: '#8C472E',
  nude: '#F2BEA0',
  branco: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    overflow-x: hidden;
  }
  body {
    background-color: ${palette.branco};
    color: ${palette.branco};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    }
`
