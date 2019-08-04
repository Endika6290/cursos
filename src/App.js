import React,{ Component} from 'react';
import './App.css';


class Contador extends Component{
    constructor(props){
        super(props)
        this.state ={ contador:this.props.contadorInicial}
        setInterval(() =>{
            this.setState({contador: this.state.contador +1})
        },1000)
    }
    render() {
        return <ContadorNum numero ={this.state.contador}/>
    }
}

Contador.defaultProps={
    contadorInicial:0
}

class ContadorNum extends Component{
    render() {
        console.log('ContadorNumeo Render()')
        return (
        <span>{this.props.numero}</span>
        );
    }
}
class App extends Component {
    render() {
        return (
            <div className="App">
                 <p>Primer Componente</p>
                <Contador contadorInicial={100}/>
            </div>
        );
    }
}

export default App;
