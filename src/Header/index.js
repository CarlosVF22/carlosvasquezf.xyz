import React from "react";

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