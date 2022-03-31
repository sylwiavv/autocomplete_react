import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, lightTheme, darkTheme } from 'assets/styles/theme';
import { GlobalContext } from "providers/GlobalContext";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import MainTemplate from "../components/templates/MainWrapper/MainTemplate";
import { Theme } from "../providers/ThemeContext";
import { ReactComponent as SunIcon } from 'assets/icons/icon__sun.svg';
import { ReactComponent as MoonIcon } from 'assets/icons/icon__moon_with_stars.svg';
import { IconWrapper, ThemeToggle } from "../components/atoms/ThemeToggle/ThemeToggle";


const Root = () => {
    const {lightMode, toggleMode} = useContext(Theme);
    const icon = lightMode === "light" ? <IconWrapper><SunIcon /></IconWrapper> : <MoonIcon />

    return (
        <ThemeProvider theme={theme}>
            <ThemeProvider theme={lightMode === "light" ? lightTheme : darkTheme}>
                <ThemeToggle onClick={toggleMode}>{icon}</ThemeToggle>
                <GlobalContext>
                    <GlobalStyle/>
                    <MainTemplate/>
                </GlobalContext>
            </ThemeProvider>

        </ThemeProvider>
    );
};

export default Root;
