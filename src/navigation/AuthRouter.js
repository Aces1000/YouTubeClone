import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

const AuthRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthRouter;
