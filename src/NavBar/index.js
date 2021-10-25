import React from "react";
import "./NavBar.css";

function NavBar(){
    return(
        <nav>
            <ul className='NavBarContainer'>
                <li>Home</li>
                <li>Sobre mi</li>
                <li>Estudios</li>
                <li>Blog</li>
                <li>Contactos</li>
            </ul>
        </nav>
    );
}

export {NavBar};