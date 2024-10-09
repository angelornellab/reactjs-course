import {useRef} from 'react';

const App = () => {
    const input = useRef();
    const file = useRef();
    const submit = () => {
        console.log(input.current.value);
        console.log(file.current.files[0]);

        const form = new FormData();
        form.append('field1', input.current.value);
        form.append('file', file.current.files[0]);

        fetch('/lala', {method: 'post', body: form});
    };

    
    return (
        <div>
            <div>
                <span>Lala</span>
                <input type='text' name='field1' ref={input} />
                <input type='file' ref={file} />
            </div>
            <input type='submit' value='Send' onClick={submit} />
        </div>
    );
};

export default App;
