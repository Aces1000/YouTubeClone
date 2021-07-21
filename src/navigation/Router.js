import React from 'react';

import AppRouter from './AppRouter';
import AuthRouter from './AuthRouter';

const Router = () => {
  // TODO: add authentication flow
  const isLoggedIn = true;

  return isLoggedIn ? <AppRouter /> : <AuthRouter />;
};

export default Router;
