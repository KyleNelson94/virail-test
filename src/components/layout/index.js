import React from "react";
import { Containers } from "./styles";

const Main = ({ children }) => {

    return (
        <Containers.Main>
            {children}
        </Containers.Main>
    );
};

export default Main;