import './fonts.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;

    transition: background 0.2s ease-in, color 0.2s ease-in;
    padding: ${({theme}) => theme.indents.m};

    color: ${props => props.theme.fontColor};
    background-color: ${props => props.theme.backgroundColor};
  }

  #root,
  body,
  html {
    height: 100%;
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
    transform-origin: left;
    transform: scale(0.75);
  }
`;
