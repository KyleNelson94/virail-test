import React from "react";
import styled from "styled-components";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Pre from "./test/Pre";

const SlideItem = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    display: block;

    h2 {
        color: ${props => props.theme.turquoise};
        text-transform: capitalize;
    }
`;

const Carousel = ({slides}) => {
    console.log("Slides --------> ", slides);
    if(slides) {
        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={6}
                visibleSlides={3}
            >
                <Slider>
                    {slides.map((item, i) => (
                        <Slide index={i} key={i}>
                            <SlideItem>
                                <h2>{item}</h2>
                                <Pre things={item} />
                            </SlideItem>
                        </Slide>
                    ))}
                </Slider>
            </CarouselProvider>
        );
    }
    
};

export default Carousel;