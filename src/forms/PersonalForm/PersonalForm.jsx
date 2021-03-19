import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import stylesForm from '../Forms.module.css';
import stylesButton from '../../fragments/Button/Button.module.css';

const PersonalForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={Yup.object({
      firstName: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      jobTitle: Yup.string()
        .min(2, 'Enter valid job title')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string()
        .matches(
          /^380(67|68|96|97|98|50|66|95|99|63|73|93)\d{7}$/gi,
          'Enter correct phone with format: 380633456789'
        )
        .required('Required')
    })}
    onSubmit={onSubmit}
  >
    {({ isValid }) => (
      <Form className={stylesForm.form}>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" id="firstName" />
        <span>
          <ErrorMessage name="firstName" />
        </span>

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" id="lastName" />
        <span>
          <ErrorMessage name="lastName" />
        </span>

        <label htmlFor="jobTitle">Job Title</label>
        <Field name="jobTitle" type="text" id="jobTitle" />
        <span>
          <ErrorMessage name="jobTitle" />
        </span>

        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" id="email" />
        <span>
          <ErrorMessage name="email" />
        </span>

        <label htmlFor="phone">Phone Number</label>
        <Field name="phone" type="text" id="phone" />
        <span>
          <ErrorMessage name="phone" />
        </span>

        <button
          className={stylesButton.button}
          disabled={!isValid}
          type="submit"
        >
          Continue
        </button>
      </Form>
    )}
  </Formik>
);

PersonalForm.propTypes = {
  initialValues: PropTypes.objectOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PersonalForm;
