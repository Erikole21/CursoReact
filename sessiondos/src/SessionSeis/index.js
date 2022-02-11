import React, { useState } from 'react';

//renderizado condicional

//Directa
//Ternaria
//Por funcion

const RenderizadoCondicional = () => {

    const [mostrarUsuarios, setMostrarUsuarios] = useState(true);
    const componenteDirecto = <span>Hola Mundo Directo</span>;
    const componenteTernario = <span>Hola Mundo Ternario</span>;
    const componenteTernarioDos = <span>Hola Mundo Ternario Dos</span>;

    //por funcion
    const renderizarMensaje = () => {
        if (mostrarUsuarios) {
            return componenteDirecto;
        }
        else {
            return componenteTernario;
        }
    }

    return (
        <>
            {/* //Directa */}
            {mostrarUsuarios && componenteDirecto}
            <br />
            {/* Ternaria */}
            {mostrarUsuarios ? componenteTernario : componenteTernarioDos}
            <br />
            {/* por funcion */}
            {renderizarMensaje()}
        </>

    )
};

export default RenderizadoCondicional;

