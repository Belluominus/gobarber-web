import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';

const Routes: React.FC = () => (
  <switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </switch>
);

export default Routes;
