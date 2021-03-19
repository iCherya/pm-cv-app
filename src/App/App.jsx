import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import styles from './App.module.css';

import Personal from '../pages/Personal/Personal';
import Education from '../pages/Education/Education';
import Work from '../pages/Work/Work';
import CV from '../pages/CV/CV';
import NotFound from '../pages/NotFound/NotFound';

const App = () => (
  <BrowserRouter>
    <div className={styles.wrapper}>
      <Switch>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/cv">
          <CV />
        </Route>
        <Route exact path="/">
          <Personal />
        </Route>
        <Route path="/">
          <NotFound />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
