import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from 'assets/styles/theme';
import {GlobalStyle} from "assets/styles/GlobalStyle";
import MainTemplate from "../components/MainWrapper/MainTemplate";
import {UserContextProvider} from "providers/UserContextProvider"

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <UserContextProvider>
                <GlobalStyle/>
                <MainTemplate/>
            </UserContextProvider>

        </ThemeProvider>
    );
};

export default Root;
