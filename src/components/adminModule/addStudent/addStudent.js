import React from 'react';
import { render } from 'react-dom';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

import './addStudent.scss';

const AddStudent = ({
  values,
  errors,
  touched,
  isSubmitting
}) => (
      <Form className="login-form col-md-6 col-12 col-sm-6">
        <div className="mx-auto">
            <h2>Add Student</h2>
            <div className="mb-3">
              <p className="label">Name</p>
              <Field type="text" name="t_name" placeholder="Full Name"/>
              { touched.t_name && errors.t_name && <p>{errors.t_name}</p> }
            </div>
            <div className="mb-3">
              <p className="label">Class</p>
              <Field type="number" min="0" name="classAss" placeholder="Class"/>
              { touched.classAss && errors.classAss && <p>{errors.classAss}</p> }
            </div>
            <button className="btn btn-primary" disabled={isSubmitting}>Add Teacher</button>
        </div>
      </Form>
)

const AddStudentForm = withFormik({
  mapPropsToValues({ t_name,classAss}) {
    return {
      t_name: t_name || '',
      classAss: classAss || ''
    }
  },
  validationSchema: Yup.object().shape({
    t_name: Yup.string().required('*Name is required'),
    classAss: Yup.number().required('*Class is required')
  }),
  handleSubmit(values, {resetForm}) {
        console.log(values);
        resetForm();
  }
})(AddStudent)

export default AddStudentForm;
