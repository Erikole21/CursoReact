import React from "react";

const AntiHeroeBox = (props) => {
    return (
        <div className={props.className}>
            <h1>Mi nombre es: {props.name} y yo soy {props.heroName}</h1>
            <img src={props.imagen}></img>
            <h2>Biografia</h2>
            {props.children}
            <a href={props.link}>{props.textlink}</a>
        </div>
    )
}

export default AntiHeroeBox;