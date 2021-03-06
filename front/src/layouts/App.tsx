import React, { FC } from 'react';
import loadable from '@loadable/component';
import { Switch, Redirect, Route } from 'react-router-dom';

const Login = loadable(() => import('@pages/login'));
const SignUp = loadable(() => import('@pages/signup'));

const App: FC = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default App;
