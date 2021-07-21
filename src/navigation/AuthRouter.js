import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens';

const Stack = createStackNavigator();

const AuthRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthRouter;
