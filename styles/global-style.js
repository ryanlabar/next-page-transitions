import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after { box-sizing: border-box; }

  body {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: bold;
    line-height: 1;
    color: inherit;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2,
  h3,
  h4 { 
    margin-bottom: 36px; 
  }

  p {
    line-height: 1.75;
    
    & + p {
      margin-top: 2rem;
    } 
  }

  img { max-width: 100%; }

  blockquote,
  figure { margin: 0; }

  form { position: relative; }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  a {
    outline: none;

    &::-moz-focus-inner { border: 0; }

    &:not(:disabled) { cursor: pointer; }
  }
`;

export default GlobalStyle;