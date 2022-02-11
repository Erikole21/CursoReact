import React, { useEffect } from "react"
import Nombre from './NombreCFH'

const FormListCFH = (props) => {

    const [state, setState] = React.useState({
        nombre: '',
        mensaje: '',
        listaNombres: ['Bedu']
    });

    const didUpdate = () => {
        setState({
            ...state,
            mensaje: `Longitud de la lista es ${state.listaNombres.length}`
        });
    }

    useEffect(didUpdate,[state.listaNombres]);

    const handleInputChange = (event) => {
        setState({
            ...state,
            nombre: event.target.value
        })
    }

    const handleClick = () => {
        const nombreEstado = state.nombre;
        if (!nombreEstado) return;

        const listaActualizada = [...state.listaNombres, nombreEstado]

        setState({ ...state, nombre: '', listaNombres: listaActualizada });

    }

    const borrarNombreLista = (key) => {
        const copiaLista = [...state.listaNombres];
        copiaLista.splice(key, 1);
        setState({
            ...state,
            listaNombres: copiaLista
        })
    }


    return (
        <div>
            {state.mensaje}
            <br/>
            <input value={state.nombre} onChange={handleInputChange} />
            <button onClick={handleClick}> Agregar</button>
            <ul>
                {state.listaNombres.map((nmbr, key) => (
                    <li key={key}>
                        <Nombre nombre={nmbr} borrarNombreLista={borrarNombreLista} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FormListCFH;