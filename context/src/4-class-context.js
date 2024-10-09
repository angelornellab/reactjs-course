import {Component, createContext} from 'react';

const Context = createContext('value');
const Provider = ({children}) => {
    return (
        <Context.Provider value='other value'>
            {children}
        </Context.Provider>
    );
};

class Componente extends Component {
    // static contextType = Context;

    render() {
        console.log(this.context);
        return (
            <div>Hola</div>
        );
    }
}

Component.contextType = Context;

const App = () => {
    return (
        <Provider>
            <Componente />
            <Context.Consumer>
                {value => <div>{value}</div>}
            </Context.Consumer>
        </Provider>

    );
};

export default App;
