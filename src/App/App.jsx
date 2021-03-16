import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import styles from './App.module.css';
import PhotoAlbum from '../components/PhotoAlbum/PhotoAlbum';
import PhotoItem from '../components/PhotoItem/PhotoItem';
import NotFound from '../components/NotFound/NotFound';

const App = () => (
  <BrowserRouter>
    <div className={styles.wrapper}>
      <Switch>
        <Route path="/album/:id">
          <PhotoAlbum />
        </Route>
        <Route path="/photo/:id">
          <PhotoItem />
        </Route>
        <Route exact path="/">
          <PhotoAlbum />
        </Route>
        <Route path="/">
          <NotFound />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
