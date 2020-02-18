import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import Button from "./Button";

const SlideItem = styled.div`

    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    display: block;

    h2 {

        color: ${props => props.theme.turquoise};
        text-transform: capitalize;
        margin: 20px 0 10px;
    }

    span {

        color: ${props => props.theme.grey};
        padding: 0 ${props => props.theme.spacing}px;
        display: block;
    }

    .carousel__btn {

        position: absolute;
        bottom: 0;
        left: 0;
    }
`;

const ItemImage = styled.div`

    position: relative;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${props => props.theme.grey};
    background-image: url(${props => props.background});
    background-position: 50% 50%;

    &::before {
        content: "";
        padding-top: 60%;
        display: block;
    }
`;
const Carousel = ({slides}) => { // tried out this carousel lib for the first time...
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={6}
            visibleSlides={3}
        >
            <Slider>
                {slides.map((item, i) => {
                    const {type, image, desc} = item;
                    return( 
                        <Slide index={i} key={i}>
                            <SlideItem>
                                <ItemImage background={ image } />
                                <h2>{ type }</h2>
                                <span>{ desc }</span>
                                <Button className="carousel__btn">Cheapest { type } Journeys</Button>
                            </SlideItem>
                        </Slide>
                    );
                })}
            </Slider>
        </CarouselProvider>
    );
};

export default Carousel;

Carousel.propTypes = {
    slides: PropTypes.array
};