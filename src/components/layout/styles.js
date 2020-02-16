import styled from "styled-components";

const Main = styled.main`

    position: relative;
    background: ${ props => props.theme.turquoise };
`;

const Contain = styled.div`

    padding: ${ props => props.theme.spacing }px;
    max-width: ${ props => props.theme.maxWidth }px;
    width: 100%;
    margin: 0 auto;

    h1, h2, h3, h4, h5, p, span, a, li {
        
        color: ${ props => props.theme.white };
    }

    @media(max-width: 768px) {

        padding-right: 0;
    }
`;

const ErrorContainer = styled.section`

    text-align: center;
    border: 5px solid red;  
    padding: ${ props => props.theme.spacing }px;
    background: ${ props => props.theme.white };
    span {color: red;}
`;

const LoadingContainer = styled.section`
    background-image: linear-gradient( #23A6D5, #23D5AB, #23A6D5);
    background-repeat: no-repeat;
    background-size: 100% 200%;
    padding: ${ props => props.theme.spacing }px;
    margin: 0;
    animation-duration: 2.5s;
    animation-name: loading;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    * { color: ${ props => props.theme.white }; }

    @keyframes loading {
        0%{background-position:100% 0%}
        100%{background-position:100% 100%}
    }
`;

const LocationContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${ props => props.theme.spacing }px;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
    }
`;

export const Containers = {
    Main, 
    Contain,
    ErrorContainer,
    LoadingContainer,
    LocationContainer
};