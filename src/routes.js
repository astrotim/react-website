import React from 'react';
import { Route, Redirect } from 'react-router';
import Main from './templates/Main';
import Home from './templates/Home';
import Articles from './templates/Articles';
import Contact from './templates/Contact';

module.exports = (
  <Route component={Main}>
    <Route path='/' component={Home}></Route>
    <Route path='/articles' component={Articles}></Route>
    <Route path='/contact' component={Contact}></Route>
  </Route>
);