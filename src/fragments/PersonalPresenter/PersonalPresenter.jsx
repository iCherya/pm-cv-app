import React from 'react';
import PropTypes from 'prop-types';

import styles from './PersonalPresenter.module.css';

const PersonalPresenter = ({ data }) => {
  const { firstName, lastName, jobTitle, phone, email } = data;

  return (
    <>
      <h1 className={styles.heading}>{`${firstName} ${lastName}`}</h1>
      <p className={styles.jobTitle}>{jobTitle}</p>
      <ul className={styles.contacts}>
        <li className={styles.phone}>{phone}</li>
        <li className={styles.email}>{email}</li>
      </ul>
    </>
  );
};

PersonalPresenter.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired
};

export default PersonalPresenter;
