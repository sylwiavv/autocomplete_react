import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from "assets/styles/GlobalStyle";
import MainTemplate from "../components/MainWrapper/MainTemplate";

const Root = () => {
  return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
            <MainTemplate />
        </ThemeProvider>
  );
};

export default Root;
