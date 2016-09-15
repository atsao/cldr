import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/app'; // Root layout
import Main from '../containers/main';

export default (
  <Route component={ App }>
    <Route path="/">
    <IndexRoute component={ Main } />
    </Route>
  </Route>
);