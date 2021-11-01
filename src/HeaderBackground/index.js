import react from "react";
import './HeaderBackground.css';
import headerBackgroundImg from "../img/imageColombia.jpg";

function HeaderBackground() {
    return(
            <img id="headerBackground-img--container" src={headerBackgroundImg}/>

    );
}

export {HeaderBackground}