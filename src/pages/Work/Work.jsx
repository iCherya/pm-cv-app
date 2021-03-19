import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

import ExperienceForm from '../../forms/ExperienceForm/ExperienceForm';
import styles from '../../forms/Forms.module.css';
import { saveData } from '../../ducks/work';

const Work = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.work);
  const { isFilled } = useSelector((state) => state.personal);

  const moveBackHandler = () => {
    history.replace('/education');
  };

  const submitHandler = (values) => {
    dispatch(saveData(values.data));
    history.push('/cv');
  };

  const labels = {
    title: 'Company Title',
    description: 'Position'
  };

  return !isFilled ? (
    <Redirect to="/" />
  ) : (
    <div className={styles.wrapper}>
      <h1>Step 3/3: Work information</h1>
      <ExperienceForm
        labels={labels}
        data={data}
        submitHandler={submitHandler}
        moveBackHandler={moveBackHandler}
        isFullDate
      />
    </div>
  );
};

export default Work;
