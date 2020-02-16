import React from "react";
import PropTypes from "prop-types";
import Carousel from "./Carousel";

const Transport = ({types}) => {
    let newArray = [];

    Object.keys(types).map((type, i) => {
        console.log("Item --------> ", type);
        let items = [],
            item;
        switch(type) {
            case "train":
                items[i] = {type: type.toString(), desc: "Choo choo", image: "", };
                items.push(items[i]);
            break;
            case "car":
                items[i] = {type: type.toString(), desc: "Vroom vroom", image: "", };
                items.push(items[i]);
            break;
            case "bus":
                items[i] = {type: type.toString(), desc: "The wheels on the bus go...", image: "", };
                items.push(items[i]);
            break;
            case "plane":
                items[i] = {type: type.toString(), desc: "Is that a bird or a...", image: "", };
                items.push(items[i]);
            break;
            case "undefined" || undefined:
            break;
            default: item[types.length + 1] = {type: "all", desc: "Don't care..."}
        }
        newArray.push(...new Set(items));

    });

    console.log("items --------> ", newArray);

    if(!types) return<p>Loading...</p>;
    if(types) return<Carousel slides={Object.keys(types)} />;
};

export default Transport;

Transport.propTypes = {
    types: PropTypes.object
};