import React from "react"

class Nombre extends React.Component {

    componentDidMount() {
        alert("Bienvenido " + this.props.nombre);
    }

    componentWillUnmount(){
        alert('Adios');
    }

    render(props) {
        return (
            <div>
                {this.props.nombre}
                <button onClick={this.props.borrarNombreLista}>
                    x
                </button>
            </div>
        );
    }

}

export default Nombre;