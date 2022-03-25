import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalContext } from "providers/GlobalContext"
import { GlobalStyle } from "assets/styles/GlobalStyle";
import MainTemplate from "../components/templates/MainWrapper/MainTemplate";

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalContext>
                <GlobalStyle/>
                <MainTemplate/>
            </GlobalContext>
        </ThemeProvider>
    );
};

export default Root;
