import {Component} from 'react';

class Button extends Component {
    state = {

    };

    constructor(props) {
        super(props)
        console.log('constructor', props);
    }

    render() {
        console.log('execute render button');

        return (
            <button
                onClick={() => this.setState({prop: 1})}
            >
                Send by button component
            </button>
        );
    };

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount', this.props, this.state);
    }
}

class App extends Component {
    state = {
        value: 1,
    };

    render() {
        console.log(this.state);

        return (
            <div>
                <p>Hello world!!</p>
                {
                    this.state.value === 1 ?
                    <Button prop1='prop1'></Button> :
                    null
                }
                <button
                    className={`${this.state.value}`}
                    onClick={() => this.setState({value: 2})}
                >
                    Send by App
                </button>
            </div>
        );
    }
}


export default App
