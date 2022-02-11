import React from 'react'

//Formulario para una escuela
//Formulario para dar de alta a profesores y alumnos nombre (cantidad en cada caso)
const Form = () => {

    const [alumno, setNombre] = React.useState({
        nombre: '',
        primerApellido: '',
        segundoApellido: ''
    });
    const [state, setState] = React.useState({
        profesores: 0,
        alumnos: 0
    });

    const editarNombre = (atributo) => (event) => setNombre({ ...alumno, [atributo]: event.target.value });
    const editarState = (atributo) => (event) => setState({ ...state, [atributo]: event.target.value });

    return (
        <div className='margen'>
            {/*Nombre */}
            <div className='campo'>                
                <input className='input' onChange={editarNombre('nombre')} />                
                <input className='input' onChange={editarNombre('primerApellido')} />                
                <input className='input' onChange={editarNombre('segundoApellido')} />                
                <div>                
                <b>Mi Nombre es:</b> {alumno.nombre + ' ' + alumno.primerApellido + ' ' + alumno.segundoApellido}                                
                </div>
            </div>                                    
            
            {/*Numero de profesores */}
            <input onChange={editarState('profesores')} />
            {state.profesores}
            <br />
            {/*Numero de Alumnos */}
            <input onChange={editarState('alumnos')} />
            {state.alumnos}
        </div>
    )
}
export default Form;