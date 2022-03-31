import React, { useState, createContext } from 'react';

const Theme = createContext({
    toggleMode: () => {},
});

const ThemeContext = ({ children }) => {
    const [ lightMode, setLightMode ] = useState(false);

    const toggleMode = () => {
        lightMode === "light" ?
            setLightMode("dark") :
            setLightMode("light")
    }


    return (
            <Theme.Provider value = {{ lightMode, toggleMode }}>
                {children}
            </Theme.Provider>
    );
}

export { Theme, ThemeContext };