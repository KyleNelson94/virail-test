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
    /* Override carousel plugin styling with custom stuff */
    .carousel {
        .carousel__slider {
            .carousel__slider-tray-wrapper {
                .carousel__slider-tray { /* ul */
                    margin-left: -10px;
                    .carousel__slide { /* Slide */
                        margin: 10px;
                        display: flex;
                        flex-direction: column;
                        padding: 10px;
                        background: ${props => props.theme.white};
                        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                    }
                }
            }
        }
    }
`;

const Color = {
    white: "rgb(255, 255, 255)",
    black: "rgb(0, 0 , 0)",
    turquoise: "rgba(12,151,161, .9)",
    grey: "rgb(59, 64, 68)",
    hotPink: "rgb(254, 67, 101)"
};

const Dimensions = {
    maxWidth: 980,
    spacing: 30,
}

export const Global = {
    Style,
    Color,
    Dimensions
};