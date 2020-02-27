import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Hero = ({ background, title, children }) => {

    const Banner = styled.div`

        width: 100%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        background: url(${background});
        filter: grayscale(0.90);
        min-height: 40vh;
        
        /* &::before {

            content: "";
            padding-top: 55%;
            display: block;
        } */
    `;

    return (
        <Banner>
            {children}
        </Banner>
    );
}

export default Hero;

Hero.propTypes = {
    background: PropTypes.string,
    title: PropTypes.string
};