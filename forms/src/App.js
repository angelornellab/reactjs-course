import {useState} from 'react';

const App = () => {
    const [value, setValue] = useState({
        inputField: '',
        textAreaField: '',
        selectField: '',
        checkField: false,
        radioField: 1,

    });
    const handleChange = ({target}) => {
        setValue({
            ...value,
            [target.name]: target.type === 'checkbox' ? target.checked : target.value,
        });
    };

    console.log(value);

    return (
        <div>
            {
                value.length < 5 ?
                <span>The minimum length is 5</span> :
                null
            }
            <input 
                type='text' 
                name='inputField' 
                value={value.inputField} 
                onChange={handleChange}
            />
            <textarea 
                name='textAreaField' 
                value={value.textAreaField} 
                onChange={handleChange} 
            />
            <select  
                name='selectField' 
                value={value.selectField} 
                onChange={handleChange}
            >
                <option value=''>-- Select --</option>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
                <option value='option4'>Option 4</option>
            </select>
            <input 
                type='checkbox'
                name='checkField'
                checked={value.checkField}
                onChange={handleChange}
            />
            <div>
                <label>Radio</label>
                <input 
                    type='radio' 
                    name='radioField'
                    value='1'
                    onChange={handleChange}
                    checked={value.radioField === 1}
                /> Type 1
                  <input 
                    type='radio' 
                    name='radioField' 
                    value='2' 
                    onChange={handleChange}
                    checked={value.radioField === 2}
                /> Type 2
                  <input 
                    type='radio' 
                    name='radioField' 
                    value='3' 
                    onChange={handleChange}
                    checked={value.radioField === 3}
                /> Type 3
            </div>
        </div>
    );
};

export default App;
