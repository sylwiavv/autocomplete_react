import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from "assets/styles/GlobalStyle";
import MainTemplate from "components/MainTemplate/MainTemplate";

const Root = () => {
  return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
            <MainTemplate>
                <h1>Hello</h1>
            </MainTemplate>
        </ThemeProvider>
  );
};

export default Root;
