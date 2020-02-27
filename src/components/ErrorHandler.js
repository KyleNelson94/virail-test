import React from "react";
import PropTypes from "prop-types";
import {Containers} from "./layout/styles";

const ErrorHandler = ({error, status}) => {

    if (!error) error = "Oh darn it... we have an issue :P";
    // error + " " + status ? status : "<span className='errrr'>No idea</span>"
    return (
        <Containers.ErrorContainer>
            <span>{error ? error : "Oh darn it... we have an issue. Check connection. :P"}</span>
        </Containers.ErrorContainer>
    );
};

export default ErrorHandler;

ErrorHandler.propTypes = {
    error: PropTypes.string,
    status: PropTypes.string
};