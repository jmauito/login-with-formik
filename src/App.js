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
      alert("Login Successful");
    },

    validate: values => {
      const errors = {};
      if(!values.name) errors.name = 'Field required';
      if( !values.name.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ) errors.name = 'Not is a valid email'
      if(!values.password) errors.password = 'Field required';
      return errors;
    }

  });
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input id="emailField" type="email" name="name" onChange={formik.handleChange} value={formik.values.name} />
        { formik.errors.name ? <div id="emailError" style={{color:'red'}}>{formik.errors.name}</div> : null }
        <div>Password</div>
        <input id="pswField" type="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
        { formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null }
        <button id="submitBtn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
