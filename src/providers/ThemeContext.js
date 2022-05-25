import React, { useState, createContext, useEffect } from 'react';

const Theme = createContext({
    toggleMode: () => {},
});

const ThemeContext = ({ children }) => {
    const [ lightMode, setLightMode ] = useState(false);

    useEffect(() => {
        const themeMood = JSON.parse(localStorage.getItem('themeMood'))

        if (themeMood) {
            setLightMode(themeMood)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('themeMood', JSON.stringify(lightMode))
    }, [lightMode])

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