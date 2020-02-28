import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// In a bigger project these would be more reusable...
const Row = styled.div`

    position: relative;
    width: 100%;
    padding: ${props => props.theme.spacing / 2}px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: ${props => props.theme.spacing / 2}px 0;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

const Column = styled.div`

    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-basis: 25%;
    text-align: left;

    span {
        text-transform: capitalize;
    }
`;

const ResultList = (results, active, type) => {
    const resultsArr = Object.keys(results).map(i => results[i]); // fix top lev obj to arr to enable map
    if(resultsArr.length > 0) {
        resultsArr[0].sort(function (a, b) {
            // order by pass rate (lowest to highest)
            if (a.priceVal > b.priceVal) {
                return 1;
            } else {
                return -1;
            }
        });
    }
    return (
        <React.Fragment>
            <h3>The Cheapest {type} tickets are:</h3>
            {resultsArr[0].map((result, i) => { // don't like this, but I am running low on time :-//
                const {
                    price,
                    transport,
                    // url,
                    segments,
                    provider,
                    duration
                } = result;
                console.log("Item -------------> ", segments);

                if(i < 5) return (
                    <Row data-active={active} data-type={type} key={i}>
                        <Column>
                            <span>Transport: {transport}</span>
                        </Column>
                        <Column>
                            <span>Provider: {provider}</span>
                        </Column>
                        <Column>
                            <span>Duration: {duration}</span>
                        </Column>
                        <Column>
                            <span>Price: {price}</span>
                        </Column>
                    </Row>
                );
            })}
        </React.Fragment>
    );
};

export default ResultList;

ResultList.propTypes = {
    results: PropTypes.array,
    active: PropTypes.bool,
    type: PropTypes.string
};