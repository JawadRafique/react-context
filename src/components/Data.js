import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export const Data = () => {
    const data = useContext(ThemeContext);
    console.log(data);
    return (
        <div>
            {Object.keys(data).map((key, keyid) => {
                return (
                    <h3 key={keyid}>
                        Key Name : {key} <br></br>
                        Value: {data[key]}
                    </h3>
                );
            })}
        </div>
    );
};
