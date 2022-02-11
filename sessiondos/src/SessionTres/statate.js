import React, { Component } from "react"

class ClockUsingClass extends Component {

    //Ciclo de vida
    constructor(props) {
        super(props);
        //Estado inicial
        this.state = {
            date: new Date(),
        };
    }

    changeTime() {
        this.setState({ date: new Date() });
    }

    componentDidMount() {
        // Modificar mi estado estructura o funcion para modificar el estado        
        this.time = setInterval(() => {
            this.changeTime();
        }, 1000);
    }

    componentWillMount() {
        //Limpio la informacion
        clearInterval(this.state);
    }
    

    render() {
        return (
            <div>
                Hola Mundo desde componente de clase
                <div>
                    <h1>La hora es: {this.state.date.toLocaleTimeString()}</h1>
                </div>
            </div>
        )
    }
}

export default ClockUsingClass;