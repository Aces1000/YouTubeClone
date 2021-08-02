import React from 'react';

import AppRouter from './AppRouter';
import AuthRouter from './AuthRouter';
import { useAuth } from '../context';

const Router = () => {
  const [isLoggedIn] = useAuth();

  return isLoggedIn ? <Login /> : <AuthRouter />;
};

export default Router;
