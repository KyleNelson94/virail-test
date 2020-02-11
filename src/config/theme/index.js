import { createGlobalStyle } from "styled-components";
// Global theme file - remove some browser default styling and can add some necessary app styling too.

const Style = createGlobalStyle`

    html {
        -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;
    }
    *, *:before, *:after {
        -moz-box-sizing: inherit; -webkit-box-sizing: inherit; box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        line-height: ratio;
        -webkit-font-smoothing: antialised;
        font-family: 'Lato', sans-serif;
    }

    h1, h2, h3, h4, h5, span, a, li, button {
        
        font-family: 'Cabin', sans-serif;
    }
`;

const Color = {
    white: "rgb(255, 255, 255)",
    black: "rgb(0, 0 , 0)",
    turquoise: "rgba(12,151,161, .9)",
};

export const Global = {
    Style,
    Color
};