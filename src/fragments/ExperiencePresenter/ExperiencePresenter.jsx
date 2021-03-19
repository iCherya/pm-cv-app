import React from 'react';
import PropTypes from 'prop-types';

import styles from './ExperiencePresenter.module.css';

const ExperiencePresenter = ({ sectionTitle, data }) => {
  const getHumanDateFormat = (dateObj) => {
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const monthIdx = dateObj.getMonth();
    const date = dateObj.getDate();
    const year = dateObj.getFullYear();

    return sectionTitle === 'Education'
      ? `${month[monthIdx]} ${year}`
      : `${date.toString().padStart(2, '0')}.${(monthIdx + 1)
          .toString()
          .padStart(2, '0')}.${year}`;
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>{sectionTitle}</h2>
      <ul className={styles.list}>
        {data
          .sort((a, b) => b.endDate - a.endDate)
          .map(({ title, specialization, startDate, endDate }) => (
            <li key={performance.now()} className={styles.item}>
              <div className={styles.date}>
                <div>{getHumanDateFormat(endDate)}</div>
                <div className={styles.line} />
                <div>{getHumanDateFormat(startDate)}</div>
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

ExperiencePresenter.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      specialization: PropTypes.string,
      startDate: PropTypes.date,
      endDate: PropTypes.date
    })
  ).isRequired
};

export default ExperiencePresenter;
