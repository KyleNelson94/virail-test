import styled from "styled-components";

const Button = styled.button`

    display: inline-block;
    position: relative;
    appearance: none;
    background-color: ${props => props.theme.hotPink};
    padding: 0.5rem 1rem;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    /* width: 100%; just for demo */
    width: 14.28%; 
    color: ${props => props.theme.white};
    border: 3.5px solid ${props => props.theme.hotPink};
    border-radius: 0;
    transition: 300ms ease-in-out;
    cursor: pointer;
    margin: ${props => props.theme.spacing / 3}px 0;
    
    &:hover {

        background-color: ${props => props.theme.white};
        color: ${props => props.theme.hotPink};
    }

    @media(max-width: 768px) {
        
        width: 100%;
    }
`;

export default Button;