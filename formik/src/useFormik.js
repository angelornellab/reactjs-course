import {useFormik} from 'formik';

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


  return errors;
};

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Name</label>
      <input 
        type='text'
        {...formik.getFieldProps('name')}
      />
      {
        formik.touched.name && formik.errors.name ? 
        <div>{formik.errors.name}</div> : 
        null
      }
      <br />
      <label>Last Name</label>
      <input 
        type='text'
        {...formik.getFieldProps('lastName')}
      />
      { 
        formik.touched.lastName && formik.errors.lastName ? 
        <div>{formik.errors.lastName}</div> : 
        null
      }
      <br />
      <label>Email</label>
      <input
        type='email'
        {...formik.getFieldProps('email')}
      />
      { 
        formik.touched.email && formik.errors.email ? 
        <div>{formik.errors.email}</div> : 
        null
      }
      <button type='submit'>Send</button>
    </form>
  );
}

export default App;
