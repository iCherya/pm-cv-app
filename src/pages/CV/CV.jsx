import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from './CV.module.css';
import PersonalPresenter from '../../fragments/PersonalPresenter/PersonalPresenter';
import ExperiencePresenter from '../../fragments/ExperiencePresenter/ExperiencePresenter';
import Button from '../../fragments/Button/Button';

const CV = () => {
  const history = useHistory();
  const { personal, education, work, stage } = useSelector((state) => state);
  const { isWorkFilled } = stage;

  const moveBackHandler = () => {
    history.replace('/work');
  };

  if (!isWorkFilled) {
    moveBackHandler();
    return '';
  }

  return (
    <div className={styles.wrapper}>
      <PersonalPresenter data={personal} />
      <ExperiencePresenter sectionTitle="Education" data={education} />
      <ExperiencePresenter sectionTitle="Work" data={work} />
      <Button text="Back" onClick={moveBackHandler} />
    </div>
  );
};

export default CV;
