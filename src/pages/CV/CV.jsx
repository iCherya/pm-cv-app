import React from 'react';
import { useSelector } from 'react-redux';

import styles from './CV.module.css';
import PersonalSection from '../../fragments/PersonalSection/PersonalSection';
import PreviousSection from '../../fragments/PreviousSection/PreviousSection';
import Button from '../../fragments/Button/Button';

const CV = () => {
  const personal = useSelector((state) => state.personal);
  const education = useSelector((state) => state.education);
  const experience = useSelector((state) => state.experience);

  return (
    <div className={styles.wrapper}>
      <PersonalSection data={personal} />
      <PreviousSection sectionTitle="Education" data={education} />
      <PreviousSection sectionTitle="Experience" data={experience} />
      <Button text="Back" onClick={() => console.log('click')} />
    </div>
  );
};

export default CV;
