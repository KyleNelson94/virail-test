import styled from "styled-components";

const Main = styled.main`

    position: relative;
    background: ${ props => props.theme.white };
    padding: 30px;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
`;

export const Containers = {
    Main
}