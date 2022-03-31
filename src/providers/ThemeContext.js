import React, { useState, createContext, useEffect } from 'react';

const Theme = createContext({
    toggleMode: () => {},
});

const ThemeContext = ({ children }) => {
    const [ lightMode, setLightMode ] = useState(false);

    useEffect(() => {
        const cartItemsData = JSON.parse(localStorage.getItem('cartItems'))

        if (cartItemsData) {
            setLightMode(cartItemsData)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(lightMode))
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