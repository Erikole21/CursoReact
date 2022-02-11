import React from 'react'

const Boton = (props) => {
    return (
        <div>
            <button onClick={props.handleClick}>
                {props.texto}
            </button>
        </div>
    )
}

export default Boton;