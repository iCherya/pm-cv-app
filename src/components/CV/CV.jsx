import React from 'react';

import styles from './CV.module.css';
import Section from '../../fragments/Section/Section';

const CV = () => {
  const _props = {
    personal: {
      firstName: 'Vladyslav',
      lastName: 'Cherednichenko',
      jobTitle: 'Lorem ipsum dolor ',
      phone: '+380638744478',
      email: 'chrednichenko.vlad@gmail.com'
    },
    education: [
      {
        id: 1,
        title: 'Lorem',
        specialization:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        startDate: '02.2020',
        endDate: '03.2017'
      },
      {
        id: 2,
        title: 'Lorem',
        specialization:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        startDate: '02.2020',
        endDate: '03.2017'
      }
    ],
    experience: [
      {
        id: 1,
        title: 'Lorem 1',
        specialization: 'specialization Lorem 1',
        startDate: '01.02.2020',
        endDate: '22.03.2017'
      },
      {
        id: 2,
        title: 'Lorem 2',
        specialization: 'specialization Lorem 2',
        startDate: '01.02.2020',
        endDate: '22.03.2017'
      },
      {
        id: 3,
        title: 'Lorem 3',
        specialization: 'specialization Lorem 3',
        startDate: '01.02.2020',
        endDate: '22.03.2017'
      }
    ]
  };

  const { personal, education, experience } = _props;
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
    </div>
  );
};

export default CV;
