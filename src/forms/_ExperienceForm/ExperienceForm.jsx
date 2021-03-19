import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import stylesForm from '../Forms.module.css';
import stylesButton from '../../fragments/Button/Button.module.css';
// import Button from '../../fragments/Button/Button';

const ExperienceForm = ({ initialValues, onSubmit, isFullDate }) => {
  console.log('PreviousForm Console');

  return (
    <Formik
      initialValues={initialValues}
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
      onSubmit={onSubmit}
    >
      {({ isValid, values, setValues }) => (
        <Form className={stylesForm.form}>
          {/* <FieldArray name="experience"></FieldArray> */}
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

          <div className={stylesForm.dates}>
            <label htmlFor="startDate">Start date</label>
            {isFullDate ? (
              <DatePicker
                className={stylesForm.block}
                id="startDate"
                name="startDate"
                selected={values.startDate}
                onChange={(date) => setValues({ ...values, startDate: date })}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                showFullMonthYearPicker
              />
            ) : (
              <DatePicker
                className={stylesForm.block}
                id="startDate"
                name="startDate"
                selected={values.startDate}
                onChange={(date) => setValues({ ...values, startDate: date })}
              />
            )}
            <label htmlFor="endDate">End date</label>
            {isFullDate ? (
              <DatePicker
                className={stylesForm.block}
                id="endDate"
                name="endDate"
                selected={values.endDate}
                onChange={(date) => setValues({ ...values, endDate: date })}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                showFullMonthYearPicker
              />
            ) : (
              <DatePicker
                className={stylesForm.block}
                id="endDate"
                name="endDate"
                selected={values.endDate}
                onChange={(date) => setValues({ ...values, endDate: date })}
              />
            )}
          </div>

          <div className={stylesForm.buttons}>
            <button
              className={stylesButton.button}
              disabled={!isValid}
              type="submit"
            >
              Next
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

ExperienceForm.propTypes = {
  initialValues: PropTypes.objectOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
  isFullDate: PropTypes.bool
};

export default ExperienceForm;
