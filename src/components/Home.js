import React, { useState } from "react";
import ThemeContextProvider from "../Context/ThemeContext";
import { Data } from "./Data";

const DataList = {
    name: "Jawad",
};

export const Home = () => {
    const [state, setState] = useState({});
    return (
        <>
            <button
                onClick={() => {
                    setState(DataList);
                }}
            >
                Click For state Change
            </button>
            <h1>Context 1 value</h1>
            <ThemeContextProvider value={state}>
                <Data />
            </ThemeContextProvider>
        </>
    );
};
