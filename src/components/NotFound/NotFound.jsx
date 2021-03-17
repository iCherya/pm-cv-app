import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFound.module.css';
import PageNotFound from './PageNotFound.png';

const NotFoundPage = () => (
  <div>
    <h1 className={styles.text}>Page Not Found</h1>
    <div className={styles.image}>
      <img src={PageNotFound} alt="Jean Claude Van Damme" />
    </div>
    <p className={styles.text}>
      Wrong Bet. <Link to="/">Go Home</Link>
    </p>
  </div>
);

export default NotFoundPage;
