import styled from "styled-components";

const Button = styled.button`

    display: inline-block;
    position: relative;
    appearance: none;
    background-color: ${props => props.theme.turquoise};
    padding: 0.5rem 1rem;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    width: 17%;
    color: ${props => props.theme.white};
    border: 2px solid ${props => props.theme.turquoise};
    border-radius: 25px;
    margin: 10px;
    transition: 300ms ease-in-out;
    
    &:hover {
        background-color: ${props => props.theme.white};
        color: ${props => props.theme.turquoise};
    }
`;

export default Button;