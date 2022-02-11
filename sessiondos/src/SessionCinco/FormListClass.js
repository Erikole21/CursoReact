import React from "react"
import Nombre from './Nombre'

class FormListClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            mensaje: '',
            listaNombre: ['Bedu']
        }
    }

    handleInputChange = (event) => {
        this.setState({
            nombre: event.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.listaNombre !== prevState.listaNombre) {
            this.setState({
                mensaje: `Longitud de la lista es: ${this.state.listaNombre.length}`
            })
        }
    }

    handleClick = () => {
        const nombreEstado = this.state.nombre;
        if (!nombreEstado) return;

        const listaActualizada = [...this.state.listaNombre, nombreEstado]

        this.setState({ nombre: '', listaNombre: listaActualizada });

    }

    borrarNombreLista = (key) => {
        const copiaLista = [...this.state.listaNombre];
        copiaLista.splice(key, 1);
        this.setState({
            listaNombre: copiaLista
        })
    }

    render() {
        return (
            <div>
                {this.state.mensaje}
                <br/>
                <input value={this.state.nombre} onChange={this.handleInputChange} />
                <button onClick={this.handleClick}> Agregar</button>
                <ul>
                    {this.state.listaNombre.map((nmbr, key) => (
                        <li key={key}>
                            <Nombre nombre={nmbr} borrarNombreLista={this.borrarNombreLista} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default FormListClass;