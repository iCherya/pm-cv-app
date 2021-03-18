import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from './CV.module.css';
import PersonalSection from '../../fragments/PersonalSection/PersonalSection';
import PreviousSection from '../../fragments/PreviousSection/PreviousSection';
import Button from '../../fragments/Button/Button';

const CV = () => {
  const history = useHistory();
  const { personal, education, experience } = useSelector((state) => state);

  const moveBackHandler = () => {
    history.replace('/experience');
  };

  return (
    <div className={styles.wrapper}>
      <PersonalSection data={personal} />
      <PreviousSection sectionTitle="Education" data={education} />
      <PreviousSection sectionTitle="Experience" data={experience} />
      <Button text="Back" onClick={moveBackHandler} />
    </div>
  );
};

export default CV;
