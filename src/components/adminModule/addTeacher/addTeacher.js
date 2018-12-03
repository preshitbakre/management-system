import React from 'react';
import { render } from 'react-dom';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

import './addTeacher.scss';

const AddTeacher = ({
  values,
  errors,
  touched,
  isSubmitting
}) => (
      <Form className="login-form col-md-6 col-12 col-sm-6">
        <div className="mx-auto">
            <h2>Add Teacher</h2>
            <div className="mb-3">
              <p className="label">Name</p>
              <Field type="text" name="t_name" placeholder="Full Name"/>
              { touched.t_name && errors.t_name && <p>{errors.t_name}</p> }
            </div>
            <div className="mb-3">
              <p className="label">Subjects</p>
              <Field type="text" name="subjects" placeholder="Subjects"/>
              { touched.subjects && errors.subjects && <p>{errors.subjects}</p> }
            </div>
            <div className="mb-3">
              <p className="label">Class</p>
              <Field type="number" min="0" name="classAss" placeholder="Class"/>
              { touched.classAss && errors.classAss && <p>{errors.classAss}</p> }
            </div>
            <div className="mb-3">
              <p className="label">Experience</p>
              <Field type="number" name="experience" placeholder="No. of years"/>
              { touched.experience && errors.experience && <p>{errors.experience}</p> }
            </div>
            <button className="btn btn-primary" disabled={isSubmitting}>Add Teacher</button>
        </div>
      </Form>
)

const AddTeacherForm = withFormik({
  mapPropsToValues({ t_name,subjects,classAss,experience}) {
    return {
      t_name: t_name || '',
      subjects: subjects || '',
      classAss: classAss || '',
      experience: experience || ''
    }
  },
  validationSchema: Yup.object().shape({
    t_name: Yup.string().required('*Name is required'),
    subjects: Yup.string().required('*Subjects is required'),
    classAss: Yup.number().required('*Class is required'),
    experience: Yup.string().required('*Experience is required'),
  }),
  handleSubmit(values, {resetForm}) {
        console.log(values);
        resetForm();
  }
})(AddTeacher)

export default AddTeacherForm;
