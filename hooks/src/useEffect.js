import {Component, useState, useEffect} from 'react';

const useCustomHook = (initialValue) => {
    const [items, setItems] = useState(initialValue);
    const increase = () => {
        setItems(items + 1);
    };

    return [items, increase];
};

// class Interval extends Component {
//     interval = '';

//     componentDidMount() {
//         this.interval = setInterval(() => console.log(this.props.items), 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.interval);
//     }

//     render() {
//         return (
//             <p>Interval</p>
//         );
//     }
// }

const Interval = (items) => {
    useEffect(() => {
        const i = setInterval(() => console.log(items), 1000);

        return () => clearInterval(i);
    }, [items]);

    return (
        <p>Interval</p>
    );
};

const App = () => {
    const [items, increase] = useCustomHook(0);

    useEffect(() => {
        document.title = items;
        // console.log('useEffect');
    }, [items]);

    return (
        <div>
            Items: {items}
            &nbsp;
            <button
                onClick={increase}
            >
                Add Item
            </button>
            <Interval items={items}/>
        </div>
    );
};

export default App;