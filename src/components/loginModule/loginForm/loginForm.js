import React from 'react';
import { render } from 'react-dom';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import $ from 'jquery';

import './loginForm.scss';

const Login = ({
  values,
  errors,
  touched,
  isSubmitting
}) => (
      <Form className="login-form col-md-6 col-12 col-sm-6">
        <div className="mx-auto">
            <div className="mb-3">
              <p className="label">User Name</p>
              <Field type="email" name="email" placeholder="Email id"/>
              { touched.email && errors.email && <p>{errors.email}</p> }
            </div>
            <div className="mb-3">
              <p className="label">Password</p>
              <Field type="password" name="password" placeholder="Password"/>
              { touched.password && errors.password && <p>{errors.password}</p> }
            </div>
            <button className="btn btn-primary" disabled={isSubmitting}>Login</button>
        </div>
      </Form>
)

const LoginForm = withFormik({
  mapPropsToValues({ email,password}) {
    return {
      email: email || '',
      password: password || ''
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('*Email not valid').required('*Email is required'),
    password: Yup.string().min(9, '*Password must be 9 characters or longer').required('*Password is required')
  }),
  handleSubmit(values, {resetForm}) {
        console.log(values);
        resetForm();
  }
})(Login)

export default LoginForm;
