import React from "react";
import './Header.css';

function Header({children}){
    return(
        <header>
            <nav>
                {children}
            </nav>
        </header>
    );
}

export {Header};