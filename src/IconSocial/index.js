import React from "react";
import './IconSocial.css';
import {ReactComponent as LinkedinSVG} from './linkedin.svg';

const iconTypes = {
    "Linkedin":(
        <LinkedinSVG/>
    ),
};

function IconSocial({type,color ='gray',onClick}){
    return(
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type]}
        </span>
    );
}

export {IconSocial};