import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PersonalForm from '../../forms/PersonalForm/PersonalForm';
import styles from '../../forms/Forms.module.css';
import { saveData } from '../../ducks/personal';

const Personal = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const personal = useSelector((state) => state.personal);

  const onSubmitHandler = (values) => {
    dispatch(saveData(values));
    history.push('/education');
  };

  return (
    <div className={styles.wrapper}>
      <h1>Step 1/3: Personal information</h1>
      <PersonalForm initialValues={personal} onSubmit={onSubmitHandler} />
    </div>
  );
};

export default Personal;
