import React from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { ThemeProvider } from 'theme-ui';
import Theme from 'styles/Theme'
import GlobalStyles from 'styles/GlobalStyles'
import history from '../history';

import AppWrapper from 'components/AppWrapper';

const NotFoundRoute = () => (
  <Redirect to="/" />
);

const App = () => {
  return (
    <Router history={history}>
      <ThemeProvider theme={Theme}></ThemeProvider>
      <GlobalStyles/>
      <Switch>
        <Route exact path={['/']} component={AppWrapper} />
        <Route component={NotFoundRoute} />
      </Switch>
    </Router>
  )
}

export default App;