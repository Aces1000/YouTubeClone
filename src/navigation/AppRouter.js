import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Search, Notifications } from '../screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Notifications" component={Notifications} />
  </Tab.Navigator>
);

const AppRouter = () => {
  const mainScreenOptions = { header: () => null };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={BottomTabs} options={mainScreenOptions} />
    </Stack.Navigator>
  );
};

export default AppRouter;
