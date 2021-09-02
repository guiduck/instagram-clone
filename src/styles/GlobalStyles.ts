import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;

    width: 100%;
    height: 100%;
  }

  :root {
    --black: #000000;
    --white: #f0f0f0;
    --gray: #7A7A7A;
    --like: #E8265E;
    --ice: #e1e7e4;
  }
`;