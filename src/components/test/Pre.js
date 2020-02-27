import React from "react";
import PropTypes from "prop-types";

function Pre({things}) {

    return (
        <pre style={{
            background: "black",
            color: "limegreen",
            whiteSpace: 'pre-wrap'
        }}>
            {things}
        </pre>
    );
};

export default Pre;

Pre.propTypes = {
    things: PropTypes.string
};