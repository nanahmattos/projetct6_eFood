import { createGlobalStyle } from 'styled-components'

export const palette = {
  rose: '#E66767',
  nude: '#FFEBD9',
  white: '#FFF8F2'
}

export const breakpoints = {
  tablet: '820px',
  mobile: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
  body {
    background-color: ${palette.white};
    color: ${palette.white};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    @media (max-width: ${breakpoints.mobile}), (min-width: ${breakpoints.tablet}) {
      max-width: 80%;
    }
    }
`
