import React from "react";
import { Containers } from "./styles";

const Main = ({ children }) => {
    const { Main, Contain} = Containers;
    return (
        <Main>
            <Contain>
                {children}
            </Contain>
        </Main>
    );
};

export default Main;