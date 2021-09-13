import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E5254D;
    --blue: #5429CC;
    --green: #33CC95;
    --blue-light: #6933FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --background: #f0f2f5;
    --shape: #FFFFFF;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px){
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px){
      font-size: 87.5%; //14px
    }
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body, button, input, textarea {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export { GlobalStyle };
