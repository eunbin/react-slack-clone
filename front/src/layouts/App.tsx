import React, { FC } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Login from '@pages/login';
import SignUp from '@pages/signup';

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
