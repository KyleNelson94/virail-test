import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Card Component - Container to wrap content like search results etc.

const Wrapper = styled.div `

    position: relative;
    border: 2px solid #E4E4E4;
    width: 100%;
    margin: 10px 0;
    background: ${ props => props.theme.white };
`;

const Container = styled.div `
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1;

    * {
        padding: 0 30px;
    }
`;

const Item = styled.div`

`;

function Card ({ type, provider, segments, price }) {

    let segmentPrice = segments[0].priceVal;
    let segmentDuration = segments[0].duration;
    // let segment
    console.log("segment ------> ", segments.length);
    price = price ? price : segmentPrice.toFixed(2);


    return (
        <Wrapper>
            <Container>
                <Item>
                    <h3>{type}</h3>
                </Item>
                <Item>

                    <h3>{provider}</h3>    
                </Item>
                <Item>
                    
                    <h3>{segmentDuration}</h3>
                </Item>
                <Item>

                    <h3>{price}</h3> 
                </Item>
            </Container>
        </Wrapper>    
    );
}

export default Card;

Card.propTypes = {
    type: PropTypes.string,
    price: PropTypes.number,
};