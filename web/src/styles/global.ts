import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
  
  body {
    background: #212121;
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
