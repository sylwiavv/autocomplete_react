import React from "react";
import { render } from '@testing-library/react';
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import {GlobalContext} from "../providers/GlobalContext";

export const renderWithProviders = (children) => {
    render(
        <ThemeProvider theme={theme}>
            <GlobalContext>
                {children}
            </GlobalContext>
    </ThemeProvider>);
}