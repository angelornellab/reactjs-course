import {Formik, Form, Field, ErrorMessage} from 'formik';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import Select from './components/Select';

const validate = (values) => {
  const errors = {};
  
  if(!values.name) {
    errors.name = 'Required';
  }else if(values.name.length < 5) {
    errors.name = 'Name is very short'
  }

  if(!values.lastName) {
    errors.lastName = 'Required';
  }else if(values.lastName.length < 5) {
    errors.lastName = 'Last name is very short'
  }

  if(!values.radio) {
    errors.radio = 'Required';
  }

  return errors;
};

function App() {
  return (
    <Formik
      initialValues = {{name: '', lastName: '', email: '', select: '', customSelect: '', radio: ''}}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name='name' label='name'/>
        <br />
        <label>Last Name</label>
        <Field
          name='lastName'
          type='text'
        />
        <br />
        <ErrorMessage name='lastName' />
        <br />
        <label>Email</label>
        <Field
          name='email'
          type='email'
        />
        <br />
        <ErrorMessage name='email' />
        <br />
        <label>Select</label>
        <Field 
          name='select'
          as='select'
          className='input'
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Field>
        <br />
        <Select name='customSelect' label='Custom Select'>
          <option value=''>Select</option>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
        </Select>
        <br />
        <Checkbox name='accept'>
          Accept terms and conditions
        </Checkbox>
        <br />
        <Radio name='radio' value='1' label='radio 1'/>
        <Radio name='radio' value='2' label='radio 2'/>
        <Radio name='radio' value='3' label='radio 3'/>
        <ErrorMessage name='radio' />
        <br />
        <button type='submit'>Send</button>
      </Form>
    </Formik>
  );
}

export default App;
