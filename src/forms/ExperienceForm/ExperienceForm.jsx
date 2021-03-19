import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import stylesForm from '../Forms.module.css';
import stylesButton from '../../fragments/Button/Button.module.css';
import Button from '../../fragments/Button/Button';

const ExperienceForm = ({
  data,
  labels,
  submitHandler,
  moveBackHandler,
  isFullDate
}) => (
  <Formik
    initialValues={{ data }}
    validationSchema={Yup.object().shape({
      data: Yup.array().of(
        Yup.object().shape({
          title: Yup.string()
            .min(2, 'Must be 30 characters or more')
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
          specialization: Yup.string()
            .min(2, 'Must be 30 characters or more')
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
          startDate: Yup.string()
            .transform((v) => (v === null ? '' : v))
            .required('Required'),
          endDate: Yup.string()
            .transform((v) => (v === null ? '' : v))
            .required('Required')
        })
      )
    })}
    onSubmit={submitHandler}
  >
    {({ isValid, values, setValues }) => (
      <Form className={stylesForm.form} id="form">
        <FieldArray name="education">
          {() =>
            values.data.map((_, i) => (
              <React.Fragment key={i}>
                <label>{labels.title}</label>
                <Field type="text" name={`data.${i}.title`} />
                <ErrorMessage name={`data.${i}.title`} component="span" />

                <label>{labels.description}</label>
                <Field type="text" name={`data.${i}.specialization`} />
                <ErrorMessage
                  name={`data.${i}.specialization`}
                  component="span"
                />

                <div className={stylesForm.dates}>
                  <label>Start date</label>
                  {isFullDate ? (
                    <DatePicker
                      name={`data.${i}.startDate`}
                      selected={values.data[i].startDate}
                      onChange={(date) => {
                        setValues((values) => {
                          const obj = { ...values };
                          obj.data[i].startDate = date;

                          return obj;
                        });
                      }}
                    />
                  ) : (
                    <DatePicker
                      name={`data.${i}.startDate`}
                      selected={values.data[i].startDate}
                      onChange={(date) => {
                        setValues((values) => {
                          const obj = { ...values };
                          obj.data[i].startDate = date;

                          return obj;
                        });
                      }}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      showFullMonthYearPicker
                    />
                  )}
                  <ErrorMessage name={`data.${i}.startDate`} component="span" />

                  <label>End date</label>
                  {isFullDate ? (
                    <DatePicker
                      name={`data.${i}.endDate`}
                      selected={values.data[i].endDate}
                      onChange={(date) => {
                        setValues((values) => {
                          const obj = { ...values };
                          obj.data[i].endDate = date;

                          return obj;
                        });
                      }}
                    />
                  ) : (
                    <DatePicker
                      name={`data.${i}.endDate`}
                      selected={values.data[i].endDate}
                      onChange={(date) => {
                        setValues((values) => {
                          const obj = { ...values };
                          obj.data[i].endDate = date;

                          return obj;
                        });
                      }}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      showFullMonth
                    />
                  )}
                  <ErrorMessage name={`data.${i}.endDate`} component="span" />
                </div>
              </React.Fragment>
            ))
          }
        </FieldArray>
        <div className={stylesForm.buttons}>
          <Button onClick={moveBackHandler} text="Back" />
          <Button
            onClick={() => {
              const { data } = values;

              const newData = [
                ...data,
                {
                  title: '',
                  specialization: '',
                  startDate: null,
                  endDate: null
                }
              ];

              setValues({ ...values, data: newData });
            }}
            text="Add more"
          />
          <button
            disabled={!isValid}
            className={stylesButton.button}
            type="submit"
          >
            Continue
          </button>
        </div>
      </Form>
    )}
  </Formik>
);

ExperienceForm.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  labels: PropTypes.objectOf(PropTypes.string).isRequired,
  submitHandler: PropTypes.func.isRequired,
  moveBackHandler: PropTypes.func.isRequired,
  isFullDate: PropTypes.bool
};

export default ExperienceForm;
