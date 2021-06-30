import React from "react";
import ThemeContextProvider from "../Context/ThemeContext";
import { Data } from "./Data";

const DataList = {
    name: "JawadNew",
    gender: "male",
};

export const About = () => {
    return (
        <>
            <h1>Context 2 value</h1>
            <ThemeContextProvider value={DataList}>
                <Data />
            </ThemeContextProvider>
        </>
    );
};
