import React, {useEffect} from "react"

const NombreCFH = (props) => {

    const didMount = () => {
        console.log('Bienvenido ' + props.nombre);
    }

    useEffect(didMount,[]);

    const willUnmount = () => {
        return () => {
            console.log('Adios');
        }
    }

    useEffect(willUnmount,[]);

    return (
        <div>
            {props.nombre}
            <button onClick={props.borrarNombreLista}>
                x
            </button>
        </div>
    );
}

export default NombreCFH;