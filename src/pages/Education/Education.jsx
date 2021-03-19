import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ExperienceForm from '../../forms/ExperienceForm/ExperienceForm';
import styles from '../../forms/Forms.module.css';
import { saveData } from '../../ducks/education';

const Education = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.education);

  const moveBackHandler = () => {
    history.replace('/');
  };

  const submitHandler = (values) => {
    dispatch(saveData(values.data));
    history.push('/work');
  };

  const labels = {
    title: 'Educational institution',
    description: 'Specialization'
  };

  return (
    <div className={styles.wrapper}>
      <h1>Step 2/3: Education information</h1>
      <ExperienceForm
        labels={labels}
        data={data}
        submitHandler={submitHandler}
        moveBackHandler={moveBackHandler}
      />
    </div>
  );
};

export default Education;
