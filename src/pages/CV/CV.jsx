import React from 'react';
import { useSelector } from 'react-redux';

import styles from './CV.module.css';
import forms from '../../App/Forms.module.css';
import Section from '../../fragments/Section/Section';

const CV = () => {
  const personal = useSelector((state) => state.personal);
  const education = useSelector((state) => state.education);
  const experience = useSelector((state) => state.experience);

  console.log(personal, education, experience);
  const { firstName, lastName, jobTitle, phone, email } = personal;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>{`${firstName} ${lastName}`}</h1>

      <p className={styles.jobTitle}>{jobTitle}</p>

      <ul className={styles.contacts}>
        <li className={styles.phone}>{phone}</li>
        <li className={styles.email}>{email}</li>
      </ul>

      <Section sectionTitle="Education" data={education} />
      <Section sectionTitle="Experience" data={experience} />
      <div className={forms.buttons}>
        <button className={forms.button} type="button">
          Back
        </button>
      </div>
    </div>
  );
};

export default CV;
