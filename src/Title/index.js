import React from "react";
import Typed from "typed.js"
import { useEffect, useRef } from "react";
import "./Title.css";

function Title(props) {
    // Create Ref element.
    const el = useRef(null);
    const string_base = props.string_base

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: props.strings, // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <h1 id="tile">{string_base}<br/> <span ref={el}></span></h1>
    );
}

export { Title }