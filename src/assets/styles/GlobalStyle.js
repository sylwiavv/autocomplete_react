import './fonts.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.fontColor};
    padding: ${({ theme }) => theme.indents.m};
    margin: 0;
    height: 100vh;
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

  input[type='text'],
  input[type='number'],
  input {
    font-size: 16px;
    height: 48px;
    border: 0;
  }
`;
