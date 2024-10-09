import {useReducer, useState} from 'react';

// const state = {
//     items: 0,
// };
// const action = {
//     type: string, 
//     payload: any,
// };

const initialState = {
    items: 0,
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'increase':
            return {
                items: state.items + 1,
            };
        case 'decrease':
            return {
                items: state.items - 1,
            };
        case 'set':
            return {
                items: action.payload,
            };
        default:
            return state;
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [value, setValue] = useState(0);

    return (
        <div>
            <p>Items: {state.items}</p>
            <input 
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button
                onClick={() => dispatch({type: 'increase'})}
            >
                +
            </button>
            <button
                onClick={() => dispatch({type: 'decrease'})}
            >
                -
            </button>
            <button
                onClick={() => dispatch({type: 'set', payload: value,})}
            >
                Set
            </button>
       </div>
    );
}

export default App;
