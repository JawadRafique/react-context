import React, { createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
    return (
        <ThemeContext.Provider value={props.value}>
            {props.children}
        </ThemeContext.Provider>
    );
}
