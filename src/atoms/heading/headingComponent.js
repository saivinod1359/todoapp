import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { H1, H2, H3, H4, H5, H6 } from "./headingStyles";


const HeadingComponent = ({type, msg}) => {
    let template = <H1> {msg} <FontAwesomeIcon icon={faClipboard} /></H1>;

    switch(type) {
        case "h2": 
            template = <H2> {msg} </H2>;
        break;
        case "h3": 
            template = <H3> {msg} </H3>;
        break;
        case "h4": 
            template = <H4> {msg} </H4>;
        break;
        case "h5": 
            template = <H5> {msg} </H5>;
        break;
        case "h6": 
            template = <H6> {msg} </H6>;
        break;
        default:
            console.log('default');
    }
    
    return template
}

export default HeadingComponent;