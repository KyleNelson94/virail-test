import React from "react";
import {Containers} from "./layout/styles";

function Loader({loading}) {
    return (
        <Containers.LoadingContainer>
            <span>Standby we are loading results...</span>
        </Containers.LoadingContainer>
    );
};

export default Loader;