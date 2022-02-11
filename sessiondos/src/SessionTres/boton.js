import React from "react"
//import PropTypes from 'react'

const Boton = (props) => {
    return (
        <div>
            <button onClick={props.handleClick}>
                {props.texto}
            </button>
        </div>
    )
}

// Boton.propTypes = {
//     texto: PropTypes.string.isRequerid,
//     handleClick: PropTypes.func.isRequerid
// }

export default Boton;