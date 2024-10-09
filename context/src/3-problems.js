import {createContext, useContext, useState, memo} from 'react';

const Context = createContext();
const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(0);
    const increment = () => setCounter(counter + 1)
    const decrease = () => setCounter(counter - 1)

    return (
        <Context.Provider value={{counter, increment, decrease}}>
            {children}
        </Context.Provider>
    );
};
const Incremet = memo(() => {
    console.log('Increment');
    const {increment} = useContext(Context);

    return (
        <button onClick={increment}>Increment</button>
    );
});
const Decrease = memo(() => {
    console.log('Decrease');
    const {decrease} = useContext(Context);

    return (
        <button onClick={decrease}>Decrease</button>
    );
});
const Label = () => {
    console.log('Label');
    const {counter} = useContext(Context);

    return (
       <h1>{counter}</h1>
    );
};

const App = () => {
    return (
        <CounterProvider>
            <Label />
            <Incremet />
            <Decrease />
        </CounterProvider>
    );
};

export default App;
