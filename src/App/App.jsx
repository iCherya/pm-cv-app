import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import styles from './App.module.css';
import CV from '../components/CV/CV';
import NotFound from '../components/NotFound/NotFound';

const App = () => (
  <BrowserRouter>
    <div className={styles.wrapper}>
      <Switch>
        {/* <Route path="/album/:id">
          <PhotoAlbum />
        </Route>
        <Route path="/photo/:id">
          <PhotoItem />
        </Route> */}
        <Route exact path="/">
          <CV />
        </Route>
        <Route path="/">
          <NotFound />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
