import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.css';

const Section = ({ sectionTitle, data }) => {
  console.log('Section');

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>{sectionTitle}</h2>
      <ul className={styles.list}>
        {data.map(({ id, title, specialization, startDate, endDate }) => (
          <li key={id} className={styles.item}>
            <div className={styles.date}>
              <div>{startDate}</div>
              <div className={styles.line} />
              <div>{endDate}</div>
            </div>
            <div>
              <div className={styles.title}>{title}</div>
              <div className={styles.about}>{specialization}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Section.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      specialization: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string
    })
  ).isRequired
};

export default Section;
