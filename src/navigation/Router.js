import React from 'react';

import AppRouter from './AppRouter';
import AuthRouter from './AuthRouter';
import { Login } from '../screens';

const Router = () => {
  // TODO: add authentication flow
  const isLoggedIn = false;

  return isLoggedIn ? <Login /> : <AuthRouter />;
};

export default Router;
