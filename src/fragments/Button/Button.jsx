import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ text }) => (
  <button className={styles.button} type="button">
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
