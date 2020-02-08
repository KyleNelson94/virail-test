import React from "react";
import PropTypes from "prop-types";

// Card Component - Container to wrap content like search results etc.

function Card ({ type, spacing, title, content }) {

    return<p>Card Component initialised</p>;
}


export default Card;

Card.propTypes = {
    type: PropTypes.string,
    spacing: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string
};