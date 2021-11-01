import "./section.css";

function Section(props,{children}) {
    const classes = props.classes
    return(
        <section className={classes}>
            <div>
                {children}
            </div>
        </section>
    );
}

export{Section};