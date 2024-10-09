import {Component, useState} from 'react';

// Restrictions:

// - Not called in loops or conditionals
// - Hooks can only be called in 2 parts (react components and custom hooks)
// - When you create a custom hook always use the 'use' prefix

// class App extends Component {
//     state = {
//         items: 0,
//     };

//     setItems = () => {
//         this.setState({items: this.state.items + 1});
//     };

//     render() {
//         return (
//             <div>
//                 Items: {this.state.items}
//                 &nbsp;
//                 <button
//                     onClick={this.setItems}
//                 >
//                     Add Item
//                 </button>
//             </div>
//         );
//     }
// }

const useCustomHook = (initialValue) => {
    const [items, setItems] = useState(initialValue);
    const increase = () => {
        setItems(items + 1);
    };

    return [items, increase];
};

const App = () => {
    const [items, increase] = useCustomHook(0);

    return (
        <div>
            Items: {items}
            &nbsp;
            <button
                onClick={increase}
            >
                Add Item
            </button>
        </div>
    );
};

export default App;
