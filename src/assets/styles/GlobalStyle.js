import './fonts.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
  html,
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body,
  a, button,
  * {
    font-family: 'Montserrat', sans-serif;  
  }
  
  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  input {
    height: 48px;
    width: 400px;
    padding: 0 8px;
  }
`;
