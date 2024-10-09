import Button from './Button';

const array1 = [
    'value 1',
    'value 2',
    'value 3',
];

const App = () => {
    return (
        <div>
            <h1 onClick={(e) => console.log('click', e)}>
                Hello world!!
            </h1>
            {array1.map(element => <p key={element}>{element}</p>)}
            <Button onClick={() => console.log('click')}>
                Send
            </Button>
        </div>
    );
};

export default App
