import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ text, onClick }) => (
  <button onClick={onClick} className={styles.button} type="button">
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
