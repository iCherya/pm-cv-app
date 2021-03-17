import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import styles from '../../App/Forms.module.css';
import { saveData } from '../../ducks/personal';

const Personal = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const personal = useSelector((state) => state.personal);

  return (
    <div className={styles.wrapper}>
      <h1>Step 1/3: Personal information</h1>

      <Formik
        initialValues={personal}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          jobTitle: Yup.string()
            .min(2, 'Enter valid job title')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          phone: Yup.string().required('Required')
        })}
        onSubmit={(values) => {
          console.log(values);
          dispatch(saveData(values));
          history.push('/education');
        }}
      >
        {({ isValid }) => (
          <Form className={styles.form}>
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

            <button disabled={!isValid} type="submit">
              Next
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Personal;