import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

import styles from './CV.module.css';
import PersonalPresenter from '../../fragments/PersonalPresenter/PersonalPresenter';
import ExperiencePresenter from '../../fragments/ExperiencePresenter/ExperiencePresenter';
import Button from '../../fragments/Button/Button';

const CV = () => {
  const history = useHistory();
  const { personal, education, work } = useSelector((state) => state);
  const { data, isFilled } = personal;

  const moveBackHandler = () => {
    history.replace('/work');
  };

  return !isFilled ? (
    <Redirect to="/" />
  ) : (
    <div className={styles.wrapper}>
      <PersonalPresenter data={data} />
      <ExperiencePresenter sectionTitle="Education" data={education} />
      <ExperiencePresenter sectionTitle="Work" data={work} />
      <Button text="Back" onClick={moveBackHandler} />
    </div>
  );
};

export default CV;
