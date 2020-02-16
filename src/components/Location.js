import React from "react";
import styles from "styled-components";
import {Containers} from "./layout/styles";

const Location = ({to, from}) => {
    
    const Segment = styles.div`

        border: 3px solid ${props => props.theme.white};
        padding: ${props => props.theme.spacing / 2}px;
        font-size: 20px;

        @media(max-width: 768px) {

            padding: 0;
            margin: 10px;
            border: none;
        }

        > label {

            color: ${props => props.theme.white};
        }
    `;
    return (
        <Containers.LocationContainer>
            <h3>You are going</h3>
            <Segment>
                <label>From: {to}</label>
            </Segment>    
            <Segment>
                <label>To: {from}</label>
            </Segment>
        </Containers.LocationContainer>
    );
};

export default Location;