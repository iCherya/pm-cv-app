import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from '../../forms/Forms.module.css';
import { saveData } from '../../ducks/education';
import Button from '../../fragments/Button/Button';

const Education = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const education = useSelector((state) => state.education);

  const moveBackHandler = () => {
    history.replace('/');
  };

  const addAnotherFormHandler = () => {
    console.log('AnotherForm');
  };

  return (
    <div className={styles.wrapper}>
      <h1>Step 2/3: Education information</h1>

      <Formik
        initialValues={
          education.length > 0
            ? education[0]
            : {
                title: '',
                specialization: '',
                startDate: null,
                endDate: null
              }
        }
        validationSchema={Yup.object({
          title: Yup.string()
            .min(2, 'Must be 30 characters or more')
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
          specialization: Yup.string()
            .min(2, 'Must be 30 characters or more')
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
          startDate: Yup.string().required(),
          endDate: Yup.string().required()
        })}
        onSubmit={(values) => {
          dispatch(saveData(values));
          history.push('/experience');
        }}
      >
        {({ isValid, values, setValues }) => (
          <Form className={styles.form} id="education">
            <label htmlFor="title">Educational institution</label>
            <Field name="title" type="text" id="title" />
            <span>
              <ErrorMessage name="title" />
            </span>

            <label htmlFor="specialization">Specialization</label>
            <Field name="specialization" type="text" id="specialization" />
            <span>
              <ErrorMessage name="specialization" />
            </span>

            <div className={styles.dates}>
              <label htmlFor="startDate">Start date</label>
              <DatePicker
                className={styles.block}
                id="startDate"
                name="startDate"
                selected={values.startDate}
                onChange={(date) => setValues({ ...values, startDate: date })}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                showFullMonthYearPicker
              />

              <label htmlFor="endDate">End date</label>
              <DatePicker
                id="endDate"
                name="endDate"
                selected={values.endDate}
                onChange={(date) => setValues({ ...values, endDate: date })}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                showFullMonth
                YearPicker
              />
            </div>

            <div className={styles.buttons}>
              <Button onClick={moveBackHandler} text="Back" />
              <Button onClick={addAnotherFormHandler} text="Add more" />
              <button form="education" disabled={!isValid} type="submit">
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Education;
