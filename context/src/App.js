import {Component, createContext, useContext} from 'react';

const Context1 = createContext('first context');
const Context2 = createContext('second context');
const Provider = ({children}) => {
    return (
        <Context1.Provider value='value 1'>
            <Context2.Provider value='value 2'>
                {children}
            </Context2.Provider>
        </Context1.Provider>
    );
};

class Componente extends Component {
    render() {
        return (
           <Context1.Consumer>
            {
                value1 =>
                    <Context2.Consumer>
                        {
                            value2 => <div>{`${value1} ${value2}`}</div>
                        }
                    </Context2.Consumer>
            }
           </Context1.Consumer>
        );
    }
}

const Componente2 = () => {
    const value1 = useContext(Context1);
    const value2 = useContext(Context2);

    return (
        <div>{`${value1} ${value2}`}</div>
    );
};

const App = () => {
    return (
        <Provider>
            <Componente />
            <Componente2 />
        </Provider>

    );
};

export default App;
