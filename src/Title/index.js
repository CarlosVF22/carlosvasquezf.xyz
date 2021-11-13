import React from "react";
import Typed from "typed.js"
import { useEffect, useRef } from "react";
import "./Title.css";

function Title(props) {
    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Desarrollador frontend", "Desarrollador backend", "Food fan"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <h1>¡Hola a todos! Soy Carlos Eduardo y soy <span ref={el}></span></h1>
            {/* Element to display typing strings */}
        </div>
    );
}

export { Title }