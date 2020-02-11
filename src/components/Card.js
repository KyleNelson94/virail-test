import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Card Component - Container to wrap content like search results etc.

function Card ({ type, price, provider, segments }) {
    
    console.log("Type ---------->", price);

    const Wrapper = styled.div`

        position: relative;
        border: 1px solid black;
        width: 100%;
        margin: 10px;
        background: ${ props => props.theme.white};
    `;

    const Container = styled.div`
    
        display: flex;
    `;

    return (
        <Wrapper>
            <Container>
                <h3>{type}</h3>
                {/* <p>{price}</p> */}
            </Container>
        </Wrapper>    
    );
}


export default Card;

Card.propTypes = {
    type: PropTypes.string,
    price: PropTypes.number,
};