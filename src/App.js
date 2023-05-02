import './App.css';
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: ''
    },
    
    onSubmit: values => {
      console.log('Form: ', values);
    },

    validate: values => {
      const errors = {};
      if(!values.name) errors.name = 'Username is required';
      if(!values.password) errors.password = 'Password is required';
      return errors;
    }

  });
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} />
        { formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div> : null }
        <div>Password</div>
        <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
        { formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null }
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
