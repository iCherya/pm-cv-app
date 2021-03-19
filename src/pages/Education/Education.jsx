import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from '../../forms/Forms.module.css';
import { saveData } from '../../ducks/education';
import Button from '../../fragments/Button/Button';

const Education = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.education);
  console.log(data);

  const moveBackHandler = () => {
    history.replace('/');
  };

  const submitHandler = (values) => {
    dispatch(saveData(values.data));
  };

  return (
    <div className={styles.wrapper}>
      <h1>Step 2/3: Education information</h1>

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
              startDate: Yup.string().required(),
              endDate: Yup.string().required()
            })
          )
        })}
        onSubmit={submitHandler}
      >
        {({ initialValues, isValid, errors, values, setValues }) => {
          console.log('asdasd', {
            initialValues,
            isValid,
            errors,
            values,
            setValues
          });

          return (
            <Form className={styles.form}>
              <FieldArray name="education">
                {() =>
                  values.data.map((_, i) => (
                    <React.Fragment key={i}>
                      <label>Educational institution</label>
                      <Field type="text" name={`data.${i}.title`} />
                      <ErrorMessage name={`data.${i}.title`} component="span" />

                      <label>Specialization</label>
                      <Field type="text" name={`data.${i}.specialization`} />
                      <ErrorMessage
                        name={`data.${i}.specialization`}
                        component="span"
                      />

                      <div className={styles.dates}>
                        <label>Start date</label>
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
                        <ErrorMessage
                          name={`data.${i}.startDate`}
                          component="span"
                        />

                        <label>End date</label>
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
                        <ErrorMessage
                          name={`data.${i}.endDate`}
                          component="span"
                        />
                      </div>
                    </React.Fragment>
                  ))
                }
              </FieldArray>
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
              <button type="submit">Next</button>
            </Form>
          );
        }}
      </Formik>

      {/* <Button onClick={moveBackHandler} text="Back" /> */}
      {/* <Button onClick={addAnotherFormHandler} text="Add more" /> */}
    </div>
  );
};

export default Education;
