// import React from "react";
// import PropTypes from "prop-types";
// import Carousel from "./Carousel";
// const Transport = ({types}) => {
//     let transportArr = [];

//     console.log("types ----------> ", types);

//     // Object.keys(types).map((type, i) => { 
//     //     // this isn't ideal but given that I don't have much time it's an inelegant solution to what I want
//     //     let items = [],
//     //         item,
//     //         content = "journeys over the next 7 days";

//     //     switch(type) {
//     //         case "train":
//     //             items[i] = {
//     //                 type: type.toString(),
//     //                 desc: "Choo choo, view our cheapest Train " + content,
//     //                 image: "../../public/train-image.jpg"
//     //             };
//     //             items.push(items[i]);
//     //         break;
//     //         case "car":
//     //             items[i] = {
//     //                 type: type.toString(),
//     //                 desc: "Vroom vroom, view our cheapest Car " + content,
//     //                 image: "/public/car-share-image.jpg",
//     //             };
//     //             items.push(items[i]);
//     //         break;
//     //         case "bus":
//     //             items[i] = {
//     //                 type: type.toString(),
//     //                 desc: "The wheels on the bus go..., view our cheapest Bus " + content,
//     //                 image: "/public/bus-image.png", 
//     //             };
//     //             items.push(items[i]);
//     //         break;
//     //         case "plane":
//     //             items[i] = {
//     //                 type: type.toString(), 
//     //                 desc: "Is that a bird or a..., view our cheapest Plane " + content,
//     //                 image: "/public/plane-image.webp", 
//     //             };
//     //             items.push(items[i]);
//     //         break;
//     //         default: item[types.length + 1] = {type: "all", desc: "Don't care..."}
//     //     }
        
//     //     let filtered = items.filter((el) => (el != null)); // clear out undefined values
//     //     transportArr.push(...new Set(filtered)); // push to upper scope array
//     // });

//     // let anyObj = {type: "All", desc: "I want to see the cheapest with all modes of Transport"};
//     // transportArr.push(anyObj);

//     if(!types) return<p>Loading...</p>;
//     // if(types) return<Carousel slides={transportArr} />;
// };

// export default Transport;

// Transport.propTypes = {
//     types: PropTypes.object
// };